import React, { useState } from "react";
import { FaHashtag } from "react-icons/fa";

import { Container, Input, Button } from "./styles";

function CustomInput({ handleStartMonitoring, handleResetMonitoring, pHashtag }) {
  const [hashtag, setHashtag] = useState(pHashtag || "");

  return (
    <Container>
      <FaHashtag size='35' color='#535353' />
      <Input placeholder='Digite aqui uma hashtag...' value={hashtag} onChange={(event) => setHashtag(event.target.value)} />
      <Button onClick={() => (hashtag.length > 0 ? handleStartMonitoring(hashtag) : null)} disabled={!hashtag.length > 0}>
        Monitorar
      </Button>
      {pHashtag && (
        <Button
          onClick={() => {
            handleResetMonitoring();
            setHashtag("");
          }}
          disabled={!pHashtag.length > 0}
        >
          Limpar
        </Button>
      )}
    </Container>
  );
}

export default React.memo(CustomInput);
