import React from 'react'
import { motion } from "framer-motion"


import "./Navigation.css"

const variants = {
  closed: {
    x: '-100%',
    transition: {
      delay: 0.2
    }
  },
  open: { x: 0 },
}

const linkVariants = {
  closed: { y: -100, opacity: 0 },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2
    }
  },
}

const NavLink = ({ link }) => {
  return (
    <motion.li className="nav-list__item" variants={linkVariants}>
      <a className="nav-list-item__link" href={link.url}>{link.title}</a>
    </motion.li>
  )
}


const Navigation = ({ closeBtnHandler, isNavOpen, links }) => {
  return (
    <motion.nav
      className="nav"
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 100 }}
    >
      <button aria-label="Close Menu" className="nav__button" onClick={closeBtnHandler}>
        <span className="nav-button__close-icon">
          &times;
        </span>
      </button>
      <ul className="nav__list">
        {links.map((link, index) => <NavLink link={link} key={index} />)}
      </ul>
    </motion.nav>
  )
}

/*
If using styled components, you would do...

const thing = styled(motion.thing)

*/

Navigation.defaultProps = {
  links: [
    {
      url: '/',
      title: 'Home'
    },
    {
      url: '/',
      title: 'About'
    },
    {
      url: '/',
      title: 'Work'
    },
    {
      url: '/',
      title: 'Contact'
    },
  ]
}

export default Navigation
