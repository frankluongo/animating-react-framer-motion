import React from 'react'
import { motion } from "framer-motion"

const KeyFrameTest = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1, 0, 1] }}
      transition={{ duration: 5, times: [0, 0.2, 0.3, 1] }}
    >
      Keyframes Test Element
    </motion.div>
  )
}

export default KeyFrameTest
