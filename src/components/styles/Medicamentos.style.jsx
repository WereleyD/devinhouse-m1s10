import styled, { createGlobalStyle, css } from "styled-components";

export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  box-sizing: border-box;
`;

export const StyledCardContainer = styled.div`
  height: 70%;
  overflow: auto;
  width: 100%;
  max-width: 1200px;
  padding: 40px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const StyledCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  text-align: center;
  justify-items: center;
  gap: 20px;
  padding: 30px;
`;

export const StyledCard = styled.div`
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  padding-bottom: 15px;
  img {
    width: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  h3 {
    margin: 15px;
  }
`;
