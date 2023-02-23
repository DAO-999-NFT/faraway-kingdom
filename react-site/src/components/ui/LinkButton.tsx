import React from "react";

import { motion } from "framer-motion";

interface LinkButtonProps {
  name: string;
  selected: string;
  text: string;
  onPress?: (name: string) => void;
  className?: string;
}

export function LinkButton({
  text,
  name,
  selected,
  onPress,
  className,
}: LinkButtonProps) {
  const color =
    selected === name
      ? { color: "rgb(224, 92, 255)" }
      : { color: "rgb(255, 255, 255)" };

  const handleClick = () => {
    onPress?.(name);
  };

  return (
    <motion.div
      className={`cursor-pointer font-neucha ${className}`}
      onClick={handleClick}
      animate={color}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.div>
  );
}
