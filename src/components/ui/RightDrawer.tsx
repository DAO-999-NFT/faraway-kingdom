import {Transition, Variants, motion} from 'framer-motion';
import {useRouter} from 'next/router';

import {MAIN_NAV_PATHS} from 'src/constants/Paths';

import {MenuButton} from './MenuButton';

interface RightDrawerProps {
  isOpen: boolean;
}

export function RightDrawer({isOpen}: RightDrawerProps) {
  const animation = isOpen ? 'open' : 'closed';
  const {route, push} = useRouter();

  const handlePress = (name: string) => {
    push(`/${name}`);
  };

  return (
    <>
      <motion.div
        animate={animation}
        variants={shadow}
        className="absolute z-40 right-0 left-0 translate-y-4 w-[100%] h-[100vh] bg-[rgb(0,0,0,0.15)]"
      />
      <motion.div
        animate={animation}
        className="absolute z-50 right-0 h-[100vh] translate-y-4 bg-[#2a052e]" //bg-[#2a052e]
        variants={sidebar}>
        {MAIN_NAV_PATHS.map(({text, name}) => (
          <MenuButton
            animation={animation}
            selected={route.substring(1)}
            onPress={handlePress}
            key={name}
            text={text}
            name={name}
          />
        ))}
      </motion.div>
    </>
  );
}

const openTransition: Transition = {
  type: 'spring',
  stiffness: 200,
  mass: 0.4,
};
const closedTransition: Transition = {
  delay: 0.3,
  type: 'spring',
  stiffness: 400,
  damping: 40,
};

const shadow: Variants = {
  open: () => ({
    opacity: 1,
    width: '100%',
    transition: openTransition,
  }),
  closed: {
    opacity: 0,
    display: 'none',
    transition: closedTransition,
  },
};

const sidebar: Variants = {
  open: () => ({
    width: '70%',
    paddingLeft: '10px',
    paddingRight: '10px',
    transition: openTransition,
  }),
  closed: {
    width: 0,
    paddingLeft: '0px',
    paddingRight: '0px',
    transition: closedTransition,
  },
};
