import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;

  align-items: center;
  justify-content: center;
  
  height: 100vh;
  width: 100%;

  & > div {
    width: 800px;
    height: 500px;
  }

  svg {
    cursor: pointer;

  }

`;
