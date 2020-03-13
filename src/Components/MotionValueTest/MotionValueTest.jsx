import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform
} from "framer-motion";

const MotionValueTest = () => {
  const [isCardActive, setIsCardActive] = useState(true);
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return (
    <AnimatePresence>
      {isCardActive && (
        <motion.section
          exit={{ opacity: 0, height: 0, overflow: "hidden" }}
          transition={{ opacity: { duration: 0 } }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{ x, background: "var(--blue)", opacity }}
          >
            Drag meee!
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );

  function handleDragEnd(_, { point }) {
    if (Math.abs(point.x) >= 200) {
      setIsCardActive(false);
      setTimeout(reEnableMotionTransitionTest, 2000);
    }
  }

  function reEnableMotionTransitionTest() {
    setIsCardActive(true);
  }
};

export default MotionValueTest;
