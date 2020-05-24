import React, { useCallback } from "react";
import { GoVerified } from "react-icons/go";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import { toast } from "react-toastify";

import api from "../../services/api";

import { Container, AvatarContainer, Content, Header, Message } from "./styles";

function Tweet({ item, isVerification, approved, rejected }) {
  const handleApprove = useCallback(async () => {
    try {
      await api.post("/monitor/tweets/approve", { id: item.id });
    } catch (err) {
      toast("Falha ao aprovar Tweet!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        type: toast.TYPE.ERROR,
      });
    }
  }, [item.id]);

  const handleReject = useCallback(async () => {
    try {
      await api.post("/monitor/tweets/reject", { id: item.id });
    } catch (err) {
      toast("Falha ao rejeitar Tweet!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        type: toast.TYPE.ERROR,
      });
    }
  }, [item.id]);

  return (
    <Container isVerification={isVerification}>
      <AvatarContainer isVerification={isVerification}>
        <img src={item.profile_image_url} alt='Avatar Usuário' />
      </AvatarContainer>
      <Content>
        <Header isVerification={isVerification}>
          <div>
            <span>{item.name}</span>
            {item.verified && <GoVerified size='15' color='#1da1f2' />}
            <span>@{item.username}</span>
          </div>
          {isVerification && (
            <div>
              {!approved && (
                <button title='Aprovar' onClick={handleApprove}>
                  <MdThumbUp size='15' color='#00C851' />
                </button>
              )}
              {!rejected && (
                <button title='Rejeitar' onClick={handleReject}>
                  <MdThumbDown size='15' color='#ff4444' />
                </button>
              )}
            </div>
          )}
        </Header>
        <Message isVerification={isVerification}>
          <span>{item.text}</span>
        </Message>
      </Content>
    </Container>
  );
}

export default React.memo(Tweet);
