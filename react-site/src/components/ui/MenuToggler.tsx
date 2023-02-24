import React from 'react';

import {SVGMotionProps, motion} from 'framer-motion';

interface MenuTogglerProps {
  color?: string;
  onPress: () => void;
  isOpen: boolean;
}

export function MenuToggler({
  color = '#fff',
  onPress,
  isOpen,
}: MenuTogglerProps) {
  return (
    <motion.button animate={isOpen ? 'open' : 'closed'} onClick={onPress}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: {d: 'M 2 2.5 L 20 2.5'},
            open: {d: 'M 3 16.5 L 17 2.5'},
          }}
          stroke={color}
        />
        <Path
          d="M 8 9.423 L 20 9.423"
          variants={{
            closed: {opacity: 1},
            open: {opacity: 0},
          }}
          transition={{duration: 0.1}}
          stroke={color}
        />
        <Path
          variants={{
            closed: {d: 'M 2 16.346 L 20 16.346'},
            open: {d: 'M 3 2.5 L 17 16.346'},
          }}
          stroke={color}
        />
      </svg>
    </motion.button>
  );
}

function Path(props: SVGMotionProps<SVGPathElement>) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      {...props}
    />
  );
}
