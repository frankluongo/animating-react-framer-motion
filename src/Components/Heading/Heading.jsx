import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

import "./Heading.css"

const Heading = () => {
  const h2 = useRef(null);
  const [value, updateValue] = useState(1);
  const [isToggled, updateToggle] = useState(1);

  return (
    <section className="heading">
      <AnimatePresence>
        {isToggled && (
          <motion.h2
            ref={h2}
            initial={{ fontSize: '24px', opacity: 0 }}
            animate={{ fontSize: `${value * 24}px`, opacity: isToggled }}
            exit={{ opacity: 0 }}
          >
            Super Cool
          </motion.h2>
        )}
      </AnimatePresence>
      <input
        onChange={handleRangeChange}
        type="range"
        name="heading-sizer" min="1" max="100" id="heading-sizer" value={value} />
      <button onClick={handleToggleClick}>
        Toggle
        </button>
    </section>
  )

  function handleRangeChange(e) {
    if (!h2) return;
    // const fontSize = getCurrentFontSize(h2.current);
    const inputVal = parseInt(e.target.value) <= 5 ? 1 : parseInt(e.target.value) * 0.1;
    // const newFontSize = `${fontSize * inputVal}px`;
    updateValue(inputVal);
  }

  function handleToggleClick() {
    !!isToggled ? updateToggle(0) : updateToggle(1)
  }
}

export default Heading
