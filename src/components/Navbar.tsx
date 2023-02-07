import { motion } from "framer-motion";
import Image from "next/image";

import styles from "src/styles";
import { navVariants } from "src/utils/motion";
import searchIcon from "public/common-icons/search.svg";
import menuIcon from "public/common-icons/menu.svg";

export function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0" />
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
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          METAVERSUS
        </h2>
        <Image
          src={menuIcon}
          alt="menu"
          width={40}
          height={40}
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </motion.nav>
  );
}
