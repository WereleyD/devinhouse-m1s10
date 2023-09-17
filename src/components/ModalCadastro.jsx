import React from "react";
import { StyledBackgroud, StyledDiv, StyledModal } from "./styles/Modal.style";
import { StyledButton } from "./styles/Global.style";

const ModalCadastro = (props) => {
  if (props.isOpen) {
    return (
      <StyledBackgroud>
        <StyledModal>
          <StyledDiv>
            <p>{props.page} cadastrado com sucesso!</p>
          </StyledDiv>
          <StyledDiv>
            <StyledButton onClick={props.closeModal}>Ok</StyledButton>
          </StyledDiv>
        </StyledModal>
      </StyledBackgroud>
    );
  }
};

export default ModalCadastro;
