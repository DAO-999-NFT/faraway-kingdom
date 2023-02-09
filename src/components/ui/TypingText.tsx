import {motion} from 'framer-motion';

import {textContainer, textVariant2} from 'src/utils/motion';

interface TypingTextProps {
  title: string;
  className?: string;
}

export function TypingText({title, className}: TypingTextProps) {
  return (
    <motion.span
      variants={textContainer}
      style={{wordWrap: 'break-word', hyphens: 'auto'}}
      className={`flex-row text-[14px] text-secondary-white ${className}`}>
      {title.split(' ').map((letter, index) => (
        <motion.span
          className="inline-block font-neucha"
          variants={textVariant2}
          key={index}>
          {letter === ' ' ? '\u00A0' : letter}
          {'\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  );
}
