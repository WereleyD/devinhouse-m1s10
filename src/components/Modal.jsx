import React from "react";
import { StyledBackgroud, StyledDiv, StyledModal } from "./styles/Modal.style";
import { StyledButton } from "./styles/Global.style";

const Modal = (props) => {
  if (props.isOpen) {
    return (
      <StyledBackgroud>
        <StyledModal>
          <StyledDiv>
            <div>
              <p>
                <strong>Medicamento: </strong>
                {props.nome}
              </p>
              <p>
                <strong>Laboratório: </strong>
                {props.laboratorio}
              </p>
              <p>
                <strong>Dosagem: </strong>
                {props.dosagem}mg
              </p>
            </div>
            <hr />
            <div>
              <p>
                <strong>Tipo: </strong>
                {props.tipo}
              </p>
              <p>
                <strong>Preço: </strong>
                R$ {props.preco}
              </p>
            </div>
          </StyledDiv>
          <StyledDiv>
            <p>
              <strong>Descrição: </strong>
              {props.descricao}
            </p>
          </StyledDiv>
          <StyledDiv>
            <StyledButton>Favoritar</StyledButton>
          </StyledDiv>
          <StyledDiv>
            <StyledButton onClick={props.closeModal}>Fechar</StyledButton>
          </StyledDiv>
        </StyledModal>
      </StyledBackgroud>
    );
  }
};

export default Modal;
