import React from "react";
import { motion } from "framer-motion";

import "./Square.css";

const Square = ({ color }) => {
  return (
    <motion.div
      className="square"
      // positionTransition
      positionTransition={{
        damping: 100,
        stiffness: 10
      }}
      style={{ backgroundColor: color }}
    >
      Square
    </motion.div>
  );
};

export default Square;
