import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const h2 = useRef(null);
  const [value, updateValue] = useState(1);
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
              ref={h2}
              initial={{ fontSize: '24px', opacity: 0 }}
              animate={{ fontSize: `${value * 24}px`, opacity: isToggled }}
              exit={{ opacity: 0 }}
            >
              Super Cool
            </motion.h2>
          )}
        </AnimatePresence>
        <input
          onChange={handleRangeChange}
          type="range"
          name="heading-sizer" min="1" max="10" id="heading-sizer" value={value} />
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
    if (!h2) return;
    // const fontSize = getCurrentFontSize(h2.current);
    const inputVal = parseInt(e.target.value);
    // const newFontSize = `${fontSize * inputVal}px`;
    updateValue(inputVal);
  }

  function handleToggleClick() {
    !!isToggled ? updateToggle(0) : updateToggle(1)
  }

  //
  // Helpers
  //

  function getCurrentFontSize(element) {
    return parseFloat(getComputedStyle(element)["font-size"].replace('px', ''));
  }
}

export default App;
