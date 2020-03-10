import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

import "./Modal.css"

const Modal = ({ children, visibilityState, updateVisibilityState }) => {
  return (
    <AnimatePresence>
      {visibilityState && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal__content"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
          >
            <div className="modal-content__heading">
              <div className="modal-content-heading__text">
                Modal Heading
              </div>
              <button
                className="modal-content-heading__close"
                onClick={() => updateVisibilityState(false)}>
                &times;
              </button>
            </div>
            <div className="modal-content__info">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
