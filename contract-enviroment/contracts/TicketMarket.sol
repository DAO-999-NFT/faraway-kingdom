// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.7;

import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol';

import './Tickets.sol';

contract TicketsMarket is ReentrancyGuard, ERC1155Holder {
  using Counters for Counters.Counter;
  //These can revert back to private soon
  Counters.Counter public _itemIds;
  Counters.Counter public _itemsSold;

  address payable owner;
  uint256 listingFee = 5;
  //Temp variable to simulate pricefeed data

  AggregatorV3Interface internal priceFeed;

  constructor() {
    owner = payable(msg.sender);
    priceFeed = AggregatorV3Interface(
      0x5498BB86BC934c8D34FDA08E81D444153d0D06aD
    );
  }

  struct MarketItem {
    uint itemId;
    address nftContract;
    uint256 tokenId;
    string name;
    address payable seller;
    address payable owner;
    uint256 price;
    uint256 amount;
    bool onSale;
  }

  struct MyItems {
    uint itemId;
    address nftContract;
    uint256 tokenId;
    uint256 price;
    uint256 amount;
  }

  mapping(uint256 => MarketItem) private idToMarketItem;

  event MarketItemCreated(
    uint indexed itemId,
    address indexed nftContract,
    uint256 indexed tokenId,
    string name,
    address seller,
    address owner,
    uint256 price,
    uint256 amount,
    bool onSale
  );

  function listNewMarketItem(
    address nftContract,
    uint256 tokenId,
    uint256 amount,
    bytes memory data,
    string memory name
  ) public payable nonReentrant {
    _itemIds.increment();
    uint256 itemId = _itemIds.current();
    Tickets temp = Tickets(nftContract);

    idToMarketItem[itemId] = MarketItem(
      itemId,
      nftContract,
      tokenId,
      name,
      payable(msg.sender),
      payable(address(0)),
      temp.tickets[tokenId].price,
      amount,
      true
    );

    emit MarketItemCreated(
      itemId,
      nftContract,
      tokenId,
      name,
      msg.sender,
      address(0),
      temp.tickets[tokenId].price,
      amount,
      true
    );

    temp.useUnderscoreTransfer(
      msg.sender,
      address(this),
      tokenId,
      amount,
      data
    );
  }

  function getLatestPrice() public view returns (int) {
    (
      ,
      /*uint80 roundID*/ int price /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/,
      ,
      ,

    ) = priceFeed.latestRoundData();
    return price;
  }

  function getConversion(
    uint256 _price
  ) public view returns (uint256 conversion) {
    //uint256 dataFeed = 3170211916; //this will be the pricefeed amount
    uint256 dataFeed = uint256(getLatestPrice()); //this will be the pricefeed amount
    uint256 multiplier = 100000; //this will get it to the right number of decimal places assuming that the price passed by the app coule have cents - and has been multiplied by 100 to remove decimal places.
    return conversion = _price * dataFeed * multiplier;
  }

  function buyMarketItem(
    address nftContract,
    uint256 itemId,
    uint256 amount,
    bytes memory data
  ) public payable nonReentrant {
    require(
      idToMarketItem[itemId].amount > 0,
      'There are no more items to sell'
    );
    require(
      msg.value == idToMarketItem[itemId].price * amount,
      'Please submit the asking price in order to complete the purchase'
    ); //updated with conversion
    Tickets temp = Tickets(nftContract);
    idToMarketItem[itemId].seller.transfer(msg.value);
    temp.useUnderscoreTransfer(
      address(this),
      msg.sender,
      idToMarketItem[itemId].tokenId,
      amount,
      data
    );
    idToMarketItem[itemId].amount = idToMarketItem[itemId].amount - amount;
    idToMarketItem[itemId].owner = payable(msg.sender);
    if (idToMarketItem[itemId].amount == 0) {
      _itemsSold.increment();
      idToMarketItem[itemId].onSale = false;
    }
  }

  function getMarketItem(
    uint256 marketItemId
  ) public view returns (MarketItem memory) {
    return idToMarketItem[marketItemId];
  }

  function checkRemaining(uint256 id) public view returns (uint256) {
    return idToMarketItem[id].amount;
  }

  function fetchItemsOnSale() public view returns (MarketItem[] memory) {
    uint itemCount = _itemIds.current();
    uint unsoldItemCount = _itemIds.current() - _itemsSold.current();
    uint currentIndex = 0;

    MarketItem[] memory items = new MarketItem[](unsoldItemCount);
    for (uint i = 0; i < itemCount; i++) {
      if (idToMarketItem[i + 1].onSale == true) {
        uint currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }

  //This function will need to be rewritten as the owner field will no longer accurately reflect
  function fetchMyNFTs() public view returns (MarketItem[] memory) {
    uint totalItemCount = _itemIds.current();
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].owner == msg.sender) {
        itemCount += 1;
      }
    }

    MarketItem[] memory items = new MarketItem[](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].owner == msg.sender) {
        uint currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }

  function findMarketItemId(
    address _nftContract,
    uint256 _tokenId
  ) public view returns (uint) {
    uint totalItemCount = _itemIds.current();
    uint itemCount = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      if (
        idToMarketItem[i + 1].nftContract == _nftContract &&
        idToMarketItem[i + 1].tokenId == _tokenId
      ) {
        itemCount = i + 1;
      }
    }
    return itemCount;
  }

  function listMoreOfMarketItem(
    address nftContract,
    uint256 tokenId,
    uint256 amount,
    bytes memory data,
    string memory name
  ) public payable nonReentrant {
    Tickets temp = Tickets(nftContract);
    require(
      findMarketItemId(nftContract, tokenId) > 0,
      "This item hasn't been listed yet"
    );
    require(
      idToMarketItem[findMarketItemId(nftContract, tokenId)].amount > 0,
      'This item has sold out, create a new listing'
    );
    require(
      msg.sender ==
        idToMarketItem[findMarketItemId(nftContract, tokenId)].seller,
      'Only the original seller can relist'
    );

    require(
      msg.value == (temp._price[] * amount),
      'Listing fee must equal 20% of expected sales'
    ); // updated with conversion

    uint256 itemId = findMarketItemId(nftContract, tokenId);
    uint newAmount = idToMarketItem[itemId].amount + amount;

    idToMarketItem[itemId] = MarketItem(
      itemId,
      nftContract,
      tokenId,
      name,
      payable(msg.sender),
      payable(address(0)),
      temp.tickets[tokenId].price,
      newAmount,
      true
    );
    temp.useUnderscoreTransfer(
      msg.sender,
      address(this),
      tokenId,
      amount,
      data
    );
    //IERC1155(nftContract).safeTransferFrom(msg.sender, address(this), tokenId, amount, data);
  }

  //fetch market items needs to be rewritten as it resets to all zeroes

  function fetchUserNFTs(address user) public view returns (MyItems[] memory) {
    uint totalItemCount = _itemIds.current();
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      Tickets temp = Tickets(idToMarketItem[i + 1].nftContract);
      if (temp.balanceOf(user, idToMarketItem[i + 1].tokenId) > 0) {
        itemCount += 1;
      }
    }

    MyItems[] memory personalItems = new MyItems[](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
      Tickets temp = Tickets(idToMarketItem[i + 1].nftContract);
      if (temp.balanceOf(user, idToMarketItem[i + 1].tokenId) > 0) {
        uint currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        personalItems[currentIndex] = MyItems(
          currentItem.itemId,
          currentItem.nftContract,
          currentItem.tokenId,
          currentItem.price,
          temp.balanceOf(user, idToMarketItem[i + 1].tokenId)
        );
        currentIndex += 1;
      }
    }
    return personalItems;
  }

  //this is the signature checking part of the contract - still need to make this work within the market place
  function getMessageHash(
    string memory _message
  ) public pure returns (bytes32) {
    return keccak256(abi.encodePacked(_message));
  }

  function getEthSignedMessageHash(
    bytes32 _messageHash
  ) public pure returns (bytes32) {
    return
      keccak256(
        abi.encodePacked('\x19Ethereum Signed Message:\n32', _messageHash)
      );
  }

  //need add the token ID that's being checked by the scanner
  //then need to check balnce of for that token ID for the sender

  function verify(
    address _signer,
    string memory _message,
    bytes memory signature,
    uint256 _itemId,
    address nftContract
  ) public view returns (string memory _result) {
    bytes32 messageHash = getMessageHash(_message);
    bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);
    //This is the address used for testing that is being checked - will actually be list of NFT owners in real app
    //address _testAddress = 0xc88Ad52065A113EbE503a4Cb6bCcE02B4802c264;
    Tickets temp = Tickets(nftContract);
    _result = 'Not on the list';
    if (
      temp.balanceOf(_signer, idToMarketItem[_itemId].tokenId) > 0 &&
      (recoverSigner(ethSignedMessageHash, signature) == _signer)
    ) {
      _result = 'On the list';
    }
    return _result;
  }

  function recoverSigner(
    bytes32 _ethSignedMessageHash,
    bytes memory _signature
  ) public pure returns (address) {
    (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);
    return ecrecover(_ethSignedMessageHash, v, r, s);
  }

  function splitSignature(
    bytes memory sig
  ) public pure returns (bytes32 r, bytes32 s, uint8 v) {
    require(sig.length == 65, 'invalid signature length');
    assembly {
      r := mload(add(sig, 32))
      s := mload(add(sig, 64))
      v := byte(0, mload(add(sig, 96)))
    }
  }

  //need to pass this function the token ID of the nft - this will be used to get the _message - make this the event name
  //then need to check balance of for that token ID for the sender
  //function hostActions(string memory _message, bytes memory _sig) public pure returns (string memory) {
  function hostActions(
    uint256 _itemId,
    bytes memory _sig,
    address nftContract
  ) public view returns (string memory) {
    string memory _message = idToMarketItem[_itemId].name;
    bytes32 _messageHash = getMessageHash(_message);
    bytes32 _ethSignedMessageHash = getEthSignedMessageHash(_messageHash);
    address _signer = recoverSigner(_ethSignedMessageHash, _sig);
    return verify(_signer, _message, _sig, _itemId, nftContract);
  }
}
