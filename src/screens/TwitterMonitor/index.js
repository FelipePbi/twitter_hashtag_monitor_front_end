import React, { useContext, useMemo } from "react";

import MonitorContext from "../../contexts/MonitorContext";

import { Container, Span } from "./styles";
import Tweet from "../../components/Tweet";

function TwitterMonitor() {
  const { approved, monitoring } = useContext(MonitorContext);

  const approvedTweets = useMemo(() => {
    return approved.map((element) => <Tweet item={element} />);
  }, [approved]);

  return (
    (approvedTweets.length > 0 && <Container>{approvedTweets}</Container>) || (
      <Span> {monitoring ? "Nenhum tweet recebido!" : "Monitoramento não iniciado!"}</Span>
    )
  );
}

export default React.memo(TwitterMonitor);
