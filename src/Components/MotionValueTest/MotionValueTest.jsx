import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const MotionValueTest = () => {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  console.log(x);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, background: "var(--blue)", opacity }}
    >
      Drag meee!
    </motion.div>
  );
};

export default MotionValueTest;
