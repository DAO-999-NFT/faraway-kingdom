import { motion, SVGMotionProps } from "framer-motion";

interface MenuTogglerProps {
  onToggle: () => void;
  color?: string;
}

export function MenuToggler({ onToggle, color = "#fff" }: MenuTogglerProps) {
  return (
    <button onClick={onToggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          stroke={color}
        />
        <Path
          d="M 8 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          stroke={color}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          stroke={color}
        />
      </svg>
    </button>
  );
}

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);
