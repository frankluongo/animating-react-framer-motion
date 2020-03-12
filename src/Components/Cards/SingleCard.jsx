import React from 'react'

import { Card } from "../Elements";

const SingleCard = ({ bgColor, heading, image }) => {
  return (
    <Card
      style={{ background: bgColor }}
      // whileHover={{ scale: [1.05, 0.9, 1.1, 1.0] }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ background: 'var(--red)' }}
    // There are so many functions!
    // onHoverEnd={() => console.log('function that runs on hover end')}
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
