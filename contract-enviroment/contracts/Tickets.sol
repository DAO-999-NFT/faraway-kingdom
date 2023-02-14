// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.7;

import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol';
import '@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol';

error ItemAlreadyHasUri(uint itemId);
error ItemAlreadyHasPrice(uint itemId);
error PriceMustBeGreaterThanZero(uint price);
error OnlyTokenCreatorCanDoThis();

contract Tickets is ERC1155URIStorage, ReentrancyGuard {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  address contractAddress; // = <0xF5C99...>;

  struct TicketsInfo {
    uint256 price;
    address seller;
  }

  mapping(uint256 => string) private _uris;
  mapping(uint256 => TicketsInfo) public tickets;

  event TicketCreated(
    uint indexed ticketId,
    string name,
    uint256 amount,
    uint256 price
  );

  event TicketChangeAmount(uint indexed itemId, uint amount, bytes data);

  constructor() ERC1155('') {}

  function uri(uint256 tokenId) public view override returns (string memory) {
    return (_uris[tokenId]);
  }

  //Creates general admitance tokens - all have same value and no seat specific data
  function createToken(
    string memory tokenURI,
    uint256 amount,
    uint256 price,
    bytes memory data
  ) public returns (uint) {
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    if (bytes(_uris[newItemId]).length != 0) {
      revert ItemAlreadyHasUri(newItemId);
    }
    if ((tickets[newItemId].price) != 0) {
      revert ItemAlreadyHasPrice(newItemId);
    }
    if (price <= 0) {
      revert PriceMustBeGreaterThanZero(price);
    }

    tickets[newItemId].seller = msg.sender;
    _mint(msg.sender, newItemId, amount, data);
    _uris[newItemId] = tokenURI;
    tickets[newItemId].price = price;
    setApprovalForAll(contractAddress, true);
    emit TicketCreated(newItemId, tokenURI, amount, price);
    return newItemId;
  }

  //Creates more general admitance tokens - all have samve value and no seat specific data
  function createMoreTokens(
    uint256 tokenId,
    uint256 amount,
    bytes memory data
  ) public {
    if (tickets[tokenId].seller != msg.sender) {
      revert OnlyTokenCreatorCanDoThis();
    }
    _mint(msg.sender, tokenId, amount, data);
  }

  //need to create a transfer function that allows transfer with payable amount no higher than original price
  function sendFree(
    address to,
    uint256 tokenId,
    uint256 amount,
    bytes memory data
  ) public {
    _safeTransferFrom(msg.sender, to, tokenId, amount, data);
    setApprovalForAll(to, true);
  }

  function useUnderscoreTransfer(
    address from,
    address to,
    uint256 tokenId,
    uint256 amount,
    bytes memory data
  ) public {
    _safeTransferFrom(from, to, tokenId, amount, data);
  }
}
