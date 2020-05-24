import React, { useContext, useCallback, useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
import { FaListUl } from "react-icons/fa";

import MonitorContext from "../../contexts/MonitorContext";

import { Container, GridTweets, Title, Column, Row, Count, Empty } from "./styles";

import CustomInput from "../../components/CustomInput";
import Monitoring from "../../components/Monitoring";
import Tweet from "../../components/Tweet";

import api from "../../services/api";

import "react-toastify/dist/ReactToastify.css";

function ControlPainel() {
  const { monitoring, received, approved, rejected, hashtag } = useContext(MonitorContext);

  const [requstLoading, setRequestLoading] = useState(false);

  const handleResetMonitoring = useCallback(async () => {
    await api.post("/monitor/reset");
  }, []);

  const handleStartMonitoring = useCallback(async (pHashtag) => {
    setRequestLoading(true);
    await api.post("/monitor", { hashtag: pHashtag, monitoring: true });
    setRequestLoading(false);
  }, []);

  const handleStopMonitoring = useCallback(async () => {
    setRequestLoading(true);
    await api.post("/monitor", { monitoring: false });
    setRequestLoading(false);
  }, []);

  const receivedTweets = useMemo(() => {
    return received.map((element) => <Tweet item={element} isVerification />);
  }, [received]);

  const approvedTweets = useMemo(() => {
    return approved.map((element) => <Tweet item={element} isVerification approved />);
  }, [approved]);

  const rejectedTweets = useMemo(() => {
    return rejected.map((element) => <Tweet item={element} isVerification rejected />);
  }, [rejected]);

  return (
    <>
      <Container>
        {(monitoring && <Monitoring hashtag={hashtag} handleStopMonitoring={handleStopMonitoring} loading={requstLoading} />) || (
          <CustomInput
            handleStartMonitoring={handleStartMonitoring}
            handleResetMonitoring={handleResetMonitoring}
            pHashtag={hashtag}
            loading={requstLoading}
          />
        )}
      </Container>
      <GridTweets>
        <Column>
          <Row>
            <Title>Tweets Recebidos</Title>
            <Count>{receivedTweets.length}</Count>
          </Row>
          {(receivedTweets.length > 0 && <Row vertical>{receivedTweets}</Row>) || (
            <Empty>
              <FaListUl size='36' color='#888' />
              <span>Lista em vazia!</span>
            </Empty>
          )}
        </Column>
        <Column>
          <Row>
            <Title>Tweets Aprovados</Title>
            <Count>{approvedTweets.length}</Count>
          </Row>
          {(approvedTweets.length > 0 && <Row vertical>{approvedTweets}</Row>) || (
            <Empty>
              <FaListUl size='36' color='#888' />
              <span>Lista em vazia!</span>
            </Empty>
          )}
        </Column>
        <Column>
          <Row>
            <Title>Tweets Reprovados</Title>
            <Count>{rejectedTweets.length}</Count>
          </Row>
          {(rejectedTweets.length > 0 && <Row vertical>{rejectedTweets}</Row>) || (
            <Empty>
              <FaListUl size='36' color='#888' />
              <span>Lista em vazia!</span>
            </Empty>
          )}
        </Column>
      </GridTweets>
      <ToastContainer />
    </>
  );
}

export default React.memo(ControlPainel);
