import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  max-width: 100%;
  min-width: 100%;
  padding: 10px 0;
  border-radius: ${(props) => (props.isVerification ? 0 : 3)}px;
  background-color: ${(props) => (props.isVerification ? "#f7f7f7" : "#fff")};
  box-shadow: ${(props) => (props.isVerification ? null : "0 1px 4px rgba(0, 0, 0, 0.3)")};
  border-top: ${(props) => (props.isVerification ? "solid 1px #b1b1b1" : null)};
  margin-bottom: ${(props) => (props.isVerification ? 10 : 13)}px;
  break-inside: avoid-column;
  user-select: none;
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: ${(props) => (props.isVerification ? 40 : 60)}px;
  margin: 0 10px;

  img {
    border-radius: 50%;
    height: ${(props) => (props.isVerification ? 35 : 50)}px;
    width: ${(props) => (props.isVerification ? 35 : 50)}px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 10px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${(props) => (props.isVerification ? 10 : 5)}px;

  div:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      width: 35px;
      height: 35px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
    }

    button:first-child {
      background-color: #292930;

      :hover {
        background-color: #191920;
      }
    }

    button:last-child {
      margin-left: 10px;
      background-color: #292930;

      :hover {
        background-color: #191920;
      }
    }
  }

  div:first-child {
    display: flex;
    width: 100%;
    padding-right: 5px;
    flex-direction: ${(props) => (props.isVerification ? "column" : "row")};
    justify-content: ${(props) => (props.isVerification ? "center" : "flex-start")};
    align-items: ${(props) => (props.isVerification ? "flex-start" : "center")};
    flex-wrap: wrap;

    span:first-child {
      color: #14171a;
      font-size: ${(props) => (props.isVerification ? 13 : 15)}px;
      margin-right: ${(props) => (props.isVerification ? 0 : 5)}px;
      margin-bottom: ${(props) => (props.isVerification ? 3 : 0)}px;
      font-weight: bold;
      overflow-wrap: break-word;
      line-height: 1.3125;
    }

    span:last-child {
      color: #657786;
      font-size: ${(props) => (props.isVerification ? 11 : 13)}px;
      margin-left: ${(props) => (props.isVerification ? 0 : 5)}px;
      overflow-wrap: break-word;
      line-height: 1.3125;
    }
  }
`;

export const Message = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  span {
    line-height: 1.3125;
    color: #14171a;
    border-radius: ${(props) => (props.isVerification ? "3px" : null)};
    padding: ${(props) => (props.isVerification ? "5px 5px" : null)};
    background-color: ${(props) => (props.isVerification ? "#e5e5e5" : null)};
    font-size: ${(props) => (props.isVerification ? 13 : 15)}px;
  }
`;
