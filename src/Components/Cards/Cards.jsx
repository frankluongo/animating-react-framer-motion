import React from 'react'

import { CardGrid, Card } from "../Elements";

import blue from "./Images/blue.png";
import purp from "./Images/purp.png";
import black from "./Images/black.png";
import green from "./Images/green.png";

const Cards = () => {
  return (
    <CardGrid>
      <Card style={{ background: "var(--purp)" }}>
        <h3>Some card</h3>
        <img src={purp} alt="Illustration" />
      </Card>
      <Card style={{ background: "var(--blue)" }}>
        <h3>Some card</h3>
        <img src={blue} alt="Illustration" />
      </Card>
      <Card style={{ background: "var(--black)" }}>
        <h3>Some card</h3>
        <img src={black} alt="Illustration" />
      </Card>
      <Card style={{ background: "var(--green)" }}>
        <h3>Some card</h3>
        <img src={green} alt="Illustration" />
      </Card>
    </CardGrid>
  )
}

export default Cards
