import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 95vh;
  width: 80%;
`;

export const CashierBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CashierListSection = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  height: 60%;
  padding: 5%;
`;

export const CashierItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 25%;
  margin-right: 5%;
`;
export const CashierItemButton = styled.button`
  font-size: 24px;
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const CashierControlSection = styled.section`
  display: flex;
  height: 25%;
`;

export const CashierCountListBox = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 33%;
`;

export const CashierCountItem = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 80%;
  height: 10%;
`;
