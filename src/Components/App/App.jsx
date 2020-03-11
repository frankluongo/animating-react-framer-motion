import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Header } from "../Elements";
import "./App.css";
import Menu from "../Menu";
import Modal from "../Modal";
import Accordion from "../Accordion";
import Heading from "../Heading";
import Cards from "../Cards";
import KeyFrameTest from "../KeyFrameTest";
import Navigation from "../Navigation";

function App() {
  const [modalVisible, toggleModalVisibility] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      <Header>
        <Menu clickHandler={() => setIsNavOpen(true)} />
        <Navigation isNavOpen={isNavOpen} closeBtnHandler={() => setIsNavOpen(false)} />
        <h1>Header</h1>
      </Header>
      <Container>
        <section className="section">
          <Heading />
        </section>
        <section className="section">
          <KeyFrameTest />
        </section>

        <section className="section">
          <Modal visibilityState={modalVisible} updateVisibilityState={toggleModalVisibility}>
            This is the modal content
          </Modal>
          <button onClick={() => toggleModalVisibility(!modalVisible)}>
            Toggle Modal
          </button>
        </section>
        <section className="section">
          <Cards />
        </section>
        <section className="section">
          <Accordion />
        </section>
      </Container>
    </motion.div>
  );
}

export default App;
