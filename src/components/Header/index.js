import React, { useEffect, useState, useContext } from "react";
import socketio from "socket.io-client";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDvr, MdSettings } from "react-icons/md";

import { Container, LinkContainer, CustomLink, Hashtag } from "./styles";

import MonitorContext from "../../contexts/MonitorContext";

import logo from "../../assets/images/logo.svg";
import defaultConfig from "../../configs/defaultConfig";

function Header(props) {
  const { hashtag, setHashtag, setMonitoring, setApproved, setReceived, setRejected } = useContext(MonitorContext);

  const [currentRoute, setCurrentRouter] = useState(props.location.pathname);

  useEffect(() => {
    props.history.listen((location, action) => {
      setCurrentRouter(location.pathname);
    });
  }, [props]);

  useEffect(() => {
    const socket = socketio(defaultConfig.baseURL);

    socket.on("initialState", (data) => {
      setHashtag(data.hashtag);
      setMonitoring(data.monitoring);
      setReceived(data.received);
      setApproved(data.approved);
      setRejected(data.rejected);
    });

    socket.on("stateChange", (data) => {
      setHashtag(data.hashtag);
      setMonitoring(data.monitoring);

      toast(data.monitoring ? "Monitoramento iniciado!" : "Monitoramento pausado!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        type: data.monitoring ? toast.TYPE.INFO : toast.TYPE.ERROR,
      });
    });

    socket.on("received_request", setReceived);

    socket.on("approved_request", setApproved);

    socket.on("reject_request", setRejected);
  }, [setApproved, setReceived, setRejected, setHashtag, setMonitoring]);

  return (
    <Container>
      <div>
        <img src={logo} alt='Hashtag Monitor' />
      </div>

      <Hashtag>
        {(currentRoute === "/" && (
          <div>
            {(hashtag && (
              <>
                <h4>Monitorando Hashtag</h4>
                <h1>#{hashtag}</h1>
              </>
            )) || <h1>Monitor Hashtag</h1>}
          </div>
        )) || <h1>Painel de Controle</h1>}
      </Hashtag>

      <LinkContainer>
        {(currentRoute === "/" && (
          <CustomLink to='/control-panel' title='Painel de Controle'>
            <MdSettings size='35' color='#535353' />
          </CustomLink>
        )) || (
          <CustomLink to='/' title='Monitor de Hashtag'>
            <MdDvr size='35' color='#535353' />
          </CustomLink>
        )}
      </LinkContainer>
    </Container>
  );
}

export default withRouter(Header);
