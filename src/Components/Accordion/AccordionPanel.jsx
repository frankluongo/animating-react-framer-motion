import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"

import "./AccordionPanel.css"


const accVariants = {
  closed: { height: 0, opacity: 0 },
  open: { height: 'auto', opacity: 1 },
}

const AccordionPanel = ({ panel }) => {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <section className="accordion__panel accordion-panel">
      <button className="accordion-panel__toggle" onClick={() => toggleIsOpen(!isOpen)}>
        {panel.title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-panel__content"
            initial="closed"
            animate="open"
            exit="closed"
            variants={accVariants}
          >
            <div className="accordion-panel-content__inner">
              {panel.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default AccordionPanel
