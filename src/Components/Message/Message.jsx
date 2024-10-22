import React from "react";
import { Container } from "./Message.js";

export default function Message({ message }) {
  return (
    <Container className="rightside__other-access">
      <p className="message">{message}</p>
    </Container>
  );
}
