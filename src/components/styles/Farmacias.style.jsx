import styled, { createGlobalStyle, css } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: center;
  height: 90vh;
  box-sizing: border-box;

  h1 {
    margin-bottom: 30px;
  }

  .leaflet-container {
    max-width: 1200px;
    width: 80%;
    height: 80vh;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      height: 60vh;
    }
  }

  .popup-control p {
    padding: 0;
    margin: 0;
  }
`;

// export const StyledMapWrapper = styled.div`
//   width: fit-content;
// `;
