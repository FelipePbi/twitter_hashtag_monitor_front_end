import styled from "styled-components";

export const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  column-count: 3;
  column-gap: 13px;

  @media (max-width: 1000px) {
    max-width: 900px;
    column-count: 2;
  }

  @media (max-width: 900px) {
    max-width: 800px;
  }

  @media (max-width: 800px) {
    max-width: 700px;
    column-count: 2;
  }

  @media (max-width: 700px) {
    max-width: 600px;
  }

  @media (max-width: 620px) {
    max-width: 550px;
    column-count: 1;
  }

  @media (max-width: 550px) {
    max-width: 450px;
  }
`;

export const Span = styled.span`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  font-size: 46px;
  color: #585858;
`;
