import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 40px;
  margin: 20px 0;
`;

export const Span = styled.span`
  height: 100%;
  border: none;
  line-height: 40px;
  color: #585858;
  font-size: 26px;
  background-color: transparent;
  padding-right: 10px;

  span {
    font-weight: bold;
    font-size: 30px;
    color: #999;
  }
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

  :hover {
    background-color: #191920;
  }
`;
