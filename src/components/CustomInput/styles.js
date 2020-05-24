import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 55%;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  color: #585858;
  font-size: 26px;
  background-color: transparent;
  padding: 0 10px;
`;

export const Button = styled.button`
  height: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  border-radius: 3px;
  padding: 0 20px;
  margin-left: 10px;
  background-color: #292930;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};

  :hover {
    background-color: ${(props) => (props.disabled ? "#292930" : "#191920")};
  }
`;
