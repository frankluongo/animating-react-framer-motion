import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, updateValue] = useState(0);
  const [isToggled, updateToggle] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <AnimatePresence>
          {isToggled && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ x: value, opacity: isToggled }}
              exit={{ opacity: 0 }}
            >
              Super Cool
            </motion.h2>
          )}
        </AnimatePresence>
        <input
          onChange={handleRangeChange}
          type="range"
          name="heading-sizer" min="-100" max="100" id="heading-sizer" value={value} />
        <button onClick={handleToggleClick}>
          Toggle
        </button>
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );

  function handleRangeChange(e) {
    updateValue(parseInt(e.target.value));
  }

  function handleToggleClick() {
    !!isToggled ? updateToggle(0) : updateToggle(1)
  }
}

export default App;
