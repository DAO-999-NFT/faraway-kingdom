import { motion } from "framer-motion";
import Image from "next/image";

import styles from "src/styles";
import searchIcon from "public/common-icons/search.svg";
import { MenuToggler } from "./MenuToggler";
import useWindowDimensions from "src/hooks/useWindowDimensions";
import { MAX_PX_FOR_SHOW_NAVBAR } from "src/constants/common";
import { RightDrawer } from "./RightDrawer";

export function Navbar() {
  const { width, height } = useWindowDimensions();

  const navBarVisible = width <= MAX_PX_FOR_SHOW_NAVBAR;

  return (
    <>
      <motion.nav
        className={`py-4 absolute w-[100vw] z-50 top-0 px-6 bg-[#2a052e] border-b-[1px] border-gray-500`}
        initial={false}
        custom={height}
      >
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <Image
            src={searchIcon}
            alt="search"
            width={40}
            height={40}
            className="w-[24px] h-[24px] object-contain"
          />
          <h2
            style={{ fontFamily: "Abel" }}
            className="font-extrabold font-sans text-[24px] leading-[30.24px] text-white"
          >
            METAVERSUS
          </h2>

          {navBarVisible ? <MenuToggler /> : <div className="w-5" />}
        </div>
        <RightDrawer />
      </motion.nav>
    </>
  );
}
