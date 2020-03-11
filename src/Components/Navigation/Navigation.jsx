import React from 'react'
import { motion } from "framer-motion"


import "./Navigation.css"

const variants = {
  closed: { x: '-100%' },
  open: { x: 0 }
}

const Navigation = ({ closeBtnHandler, isNavOpen }) => {
  return (
    <motion.nav
      className="nav"
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 100 }}
    >
      <button onClick={closeBtnHandler}>&times; Close Menu</button>
      <ul className="nav__list">
        <li className="nav-list__item">
          <a className="nav-list-item__link" href="/">Home</a>
        </li>
        <li className="nav-list__item">
          <a className="nav-list-item__link" href="/">About</a>
        </li>
        <li className="nav-list__item">
          <a className="nav-list-item__link" href="/">Work</a>
        </li>
        <li className="nav-list__item">
          <a className="nav-list-item__link" href="/">Contact</a>
        </li>
      </ul>
    </motion.nav>
  )
}

/*
If using styled components, you would do...

const thing = styled(motion.thing)

*/

export default Navigation
