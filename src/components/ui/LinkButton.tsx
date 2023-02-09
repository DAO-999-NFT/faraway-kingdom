import {motion} from 'framer-motion';
import Link from 'next/link';

import {PATHS_NAMES} from 'src/constants/Paths';

interface LinkButtonProps {
  name: PATHS_NAMES;
  selected: string;
  text: string;
  onPress?: (name: PATHS_NAMES) => void;
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
      ? {color: 'rgb(224, 92, 255)'}
      : {color: 'rgb(255, 255, 255)'};

  const handleClick = () => {
    onPress?.(name);
  };

  return (
    <Link href={`/${name}`}>
      <motion.div
        className={`cursor-pointer font-neucha ${className}`}
        onClick={handleClick}
        animate={color}
        transition={{duration: 0.2}}>
        {text}
      </motion.div>
    </Link>
  );
}
