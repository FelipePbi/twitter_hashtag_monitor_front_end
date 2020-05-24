import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  min-height: 60px;

  div {
    flex: 1;
  }
`;

export const Hashtag = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h4 {
    color: #585858;
    margin-bottom: 5px;
  }

  h1 {
    color: #ffffff;

    :fullscreen {
      color: red;
    }
    :-webkit-full-screen {
      color: red;
    }
    :-webkit-fullscreen {
      color: red;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  :fullscreen {
    display: none;
  }
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-content: center;
`;
