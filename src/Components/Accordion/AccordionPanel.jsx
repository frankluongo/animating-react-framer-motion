import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"

import "./AccordionPanel.css"

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
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
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
