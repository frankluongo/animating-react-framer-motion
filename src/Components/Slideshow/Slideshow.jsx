import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

import { COLORS } from "../../constants";

import "./Slideshow.css";

const variants = {
  enter: direction => ({
    opacity: 0,
    x: direction > 0 ? 1000 : -1000
  }),
  center: {
    opacity: 1,
    x: 0
  },
  exit: direction => ({
    opacity: 0,
    x: direction > 0 ? -1000 : 1000
  })
};

const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = wrap(0, COLORS.length, page);

  return (
    <section className="slideshow">
      <div className="slideshow__slides-wrapper">
        <AnimatePresence custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.75}
            onDragEnd={handleDragEnd}
            onPanStart={handlePanStart}
            onPanEnd={handlePanEnd}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            style={{ background: COLORS[index] }}
            className="slideshow__slide"
          />
        </AnimatePresence>
      </div>
      <div className="slideshow__controls">
        <button
          aria-label="View Previous Slide"
          className="slideshow-controls__control slideshow-controls__control--prev"
          onClick={() => paginate(1)}
        >
          <span role="img" aria-label="View Previous Slide">
            ⬅️
          </span>
        </button>
        <button
          aria-label="View Next Slide"
          className="slideshow-controls__control slideshow-controls__control--next"
          onClick={() => paginate(-1)}
        >
          <span role="img" aria-label="View Next Slide">
            ➡️
          </span>
        </button>
      </div>
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
  function handlePanStart({ target }) {
    target.classList.add("slideshow__slide--active");
  }
  function handlePanEnd({ target }) {
    target.classList.remove("slideshow__slide--active");
  }
  //
  // Actions
  //
  function paginate(direction) {
    setPage([page + direction, direction]);
  }
};

export default Slideshow;
