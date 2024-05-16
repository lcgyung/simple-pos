import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  display: flex;
  min-height: 95vh;
  width: 20%;
`;

export const ManageBox = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ManageListSection = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 75%;
`;

export const ManageItemBox = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  height: 15%;
`;

// 입력 컴포넌트
export const ManageRegistBox = styled.div`
  border-right: 1px solid black;
  display: flex;
  height: 25%;
`;

export const ManageRegistInputSection = styled.section`
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
  height: 100%;

  & > div:first-of-type {
    border-bottom: 1px solid black;
  }
`;

export const ManageRegistInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45%;
`;

export const ManageRegistInput = styled.input`
  height: 30%;
`;

export const ManageRegistSubmitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
`;

export const ManageRegistSubmit = styled.button`
  width: 80%;
  height: 40%;
`;
