import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "src/utils/motion";

interface TypingTextProps {
  title: string;
  className?: string;
}

export const TypingText = ({ title, className }: TypingTextProps) => (
  <motion.span
    variants={textContainer}
    style={{ wordWrap: "break-word", hyphens: "auto" }}
    className={`font-normal flex-row text-[14px] text-secondary-white ${className}`}
  >
    {title.split(" ").map((letter, index) => (
      <motion.span className="inline-block" variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
        {"\u00A0"}
      </motion.span>
    ))}
  </motion.span>
);
