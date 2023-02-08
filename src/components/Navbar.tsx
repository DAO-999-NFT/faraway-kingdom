import { motion, useCycle } from "framer-motion";
import Image from "next/image";

import styles from "src/styles";
import searchIcon from "public/common-icons/search.svg";
import menuIcon from "public/common-icons/menu.svg";
import { MenuToggler } from "./MenuToggler";

export function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className={`${styles.xPaddings} pt-8 pb relative`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
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
        <h2
          style={{ fontFamily: "Abel" }}
          className="font-extrabold font-sans text-[24px] leading-[30.24px] text-white"
        >
          METAVERSUS
        </h2>
        <MenuToggler onToggle={toggleOpen} />
      </div>
    </motion.nav>
  );
}
