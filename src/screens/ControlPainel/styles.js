import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const GridTweets = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  height: fit-content;
  width: 32%;
  background-color: #fff;
  border-radius: 3px;
  padding-top: 5px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  break-inside: avoid-column;
`;

export const Title = styled.span`
  color: #14171a;
  font-size: 15px;
  font-weight: bold;
  overflow-wrap: break-word;
`;

export const Count = styled.span`
  color: #585858;
  font-size: 22px;
  font-weight: bold;
  overflow-wrap: break-word;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  opacity: 0.6;
  padding: 20px;

  span {
    margin-top: 5px;
    color: #888;
  }
`;
