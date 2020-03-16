import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

import { COLORS } from "../../constants";

import "./Slideshow.css";

const variants = {
  enter: {
    opacity: 0,
    x: 1000
  },
  center: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: -1000
  }
};

const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = wrap(0, COLORS.length, page);

  return (
    <section className="slideshow">
      <AnimatePresence>
        <motion.div
          key={page}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.75}
          onDragEnd={handleDragEnd}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          style={{ background: COLORS[index] }}
          className="slideshow__slide"
        />
      </AnimatePresence>
    </section>
  );

  //
  // Handlers
  //
  function handleDragEnd(_, { offset }) {
    const { x: dragLength } = offset;
    if (dragLength > 200) {
      paginate(-1);
      return;
    }

    if (dragLength < -200) {
      paginate(1);
      return;
    }
  }
  //
  // Actions
  //
  function paginate(direction) {
    setPage([page + direction, direction]);
  }
};

export default Slideshow;
