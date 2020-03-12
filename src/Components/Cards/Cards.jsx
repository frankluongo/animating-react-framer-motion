import React from 'react'

import { CardGrid } from "../Elements";

import SingleCard from "./SingleCard"

import blue from "./Images/blue.png";
import purp from "./Images/purp.png";
import black from "./Images/black.png";
import green from "./Images/green.png";

const Cards = () => {
  return (
    <CardGrid>
      <SingleCard
        bgColor="var(--purp)"
        image={purp}
      />
      <SingleCard
        bgColor="var(--blue)"
        image={blue}
      />
      <SingleCard
        bgColor="var(--black)"
        image={black}
      />
      <SingleCard
        bgColor="var(--green)"
        image={green}
      />
    </CardGrid>
  )
}

export default Cards
