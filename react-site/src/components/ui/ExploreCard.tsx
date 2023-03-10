import React from 'react';

import {motion} from 'framer-motion';

import {
  exploreContentsItem,
  exploreContentsItemNames,
} from 'src/constants/сontentForExploreCards';
import {fadeIn} from 'src/utils/motion';

interface ExploreCardProps extends exploreContentsItem {
  index: number;
  active: exploreContentsItemNames;
  handleClick: (id: exploreContentsItemNames) => void;
}

export function ExploreCard({
  id,
  img,
  content,
  index,
  active,
  handleClick,
}: ExploreCardProps) {
  return (
    <motion.div
      variants={fadeIn({
        direction: 'right',
        transition: {
          type: 'spring',
          delay: index * 0.25,
        },
      })}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[140px] h-[400px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}>
      <img
        src={img}
        alt="picture"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active === id && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            delay: 0.5,
          }}
          className="absolute bottom-0 p-4 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.2)] rounded-b-[24px]">
          <p className="text-white">{content}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
