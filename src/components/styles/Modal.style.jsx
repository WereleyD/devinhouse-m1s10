import { styled } from "styled-components";

export const StyledBackgroud = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 500px;
  transform: translate(-50%, -50%);
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
  color: #000;
  gap: 30px;

  p {
    margin: 10px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px 0px 20px 0px;
`;
