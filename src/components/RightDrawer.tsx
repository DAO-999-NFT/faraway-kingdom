import { motion, Variants } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "src/context";

export function RightDrawer() {
  const { isOpen } = useContext(ThemeContext);
  const animation = isOpen ? "open" : "closed";

  return (
    <motion.div
      animate={animation}
      className="absolute z-50 right-0 h-[100vh] translate-y-4 mt-[1px] bg-[#2a052e]" //bg-[#2a052e]
      variants={sidebar}
    />
  );
}

const sidebar: Variants = {
  open: () => ({
    width: "70%",
    transition: {
      type: "spring",
      stiffness: 100,
      restDelta: 200,
      mass: 0.5,
    },
  }),
  closed: {
    width: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
