import React from "react";
import { Container, Span, Button } from "./styles";

function CustomInput({ handleStopMonitoring, hashtag }) {
  return (
    <Container>
      <Span>
        Monitorando tweets com a hashtag <span>#{hashtag}</span>
      </Span>
      <Button onClick={handleStopMonitoring}>Pausar Monitoramento</Button>
    </Container>
  );
}

export default React.memo(CustomInput);
