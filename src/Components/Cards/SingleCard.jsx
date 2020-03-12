import React from 'react'

import { Card } from "../Elements";

const SingleCard = ({ bgColor, heading, image }) => {
  return (
    <Card
      style={{ background: bgColor }}
      // whileHover={{ scale: 1.2 }}
      // whileTap={{ background: 'var(--red)' }}
      // whileHover={{ scale: [1.05, 0.9, 1.1, 1.0] }}
      // There are so many functions!
      // onHoverEnd={() => console.log('function that runs on hover end')}
      // drag
      drag="x"
      // dragConstraints={{
      //   top: -100,
      //   left: -100,
      //   bottom: 100,
      //   right: 100,
      // }}
      dragConstraints={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <h3>{heading}</h3>
      <img src={image} alt="Illustration" />
    </Card>
  )
}

SingleCard.defaultProps = {
  bgColor: 'var(--purp)',
  heading: 'Some card',
  image: 'https://placekitten.com/g/640/640'
}

export default SingleCard
