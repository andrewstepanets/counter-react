import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: lightblue;
  min-width: 300px;
  max-width: 600px;
  min-height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  padding: 30px;
  font-size: 20px;
  margin-bottom: 10px;

  & > button {
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
    min-width: 90px;
    min-height: 30px;
    font-size: 16px;
    margin: 10px 0;
    padding: 10px;
  }
`;
