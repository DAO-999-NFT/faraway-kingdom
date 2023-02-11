import {motion} from 'framer-motion';

import {PATHS_NAMES} from 'src/constants/Paths';

interface MenuButtonProps {
  name: PATHS_NAMES;
  selected: string;
  animation: 'open' | 'closed';
  text: string;
  onPress?: (name: PATHS_NAMES) => void;
}

export function MenuButton({
  text,
  selected,
  animation,
  name,
  onPress,
}: MenuButtonProps) {
  const color =
    selected === name ? 'text-[#e05cff]' : 'text-gray-100 hover:text-gray-300';
  const selectedBlock = selected === name ? 'bg-[rgb(255,255,255,0.1)]' : '';

  return (
    <motion.div
      animate={animation}
      variants={{
        open: () => ({
          opacity: 1,
          transition: {
            duration: 0.3,
            type: 'tween',
            delay: 0.3,
          },
        }),
        closed: {
          opacity: 0,
          transition: {
            duration: 0.3,
            type: 'tween',
          },
        },
      }}
      onClick={() => onPress?.(name)}
      className={`h-[60px] relative flex justify-between rounded-l-[10px] rounded-r-[3px] pl-[10px] my-[5px] cursor-pointer ${selectedBlock}`}>
      <div className={`${color} text-xl self-center sm:text-2xl`}>{text}</div>
      {selected === name && (
        <div className="w-[6px] h-[100%] rounded-[3px] ml-[10px] bg-[#e05cff]" />
      )}
    </motion.div>
  );
}
