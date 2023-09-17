import styled, { createGlobalStyle, css } from "styled-components";

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 1000px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  h1 {
    margin-bottom: 30px;
    text-align: center;
  }

  div {
    display: grid;
    gap: 30px;

    grid-template-columns: ${(props) =>
      props.medicamento ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};

    align-items: center;
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    border-top: 2px solid #ccc;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  justify-content: flex-end;
  gap: 25px;
`;
