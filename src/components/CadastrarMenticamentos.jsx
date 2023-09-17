import React, { useState } from "react";
import {
  StyledForm,
  StyledFormWrapper,
  StyledSpan,
} from "../components/styles/CadastrarMedicamentos.style";

import { useNavigate } from "react-router-dom";

import {
  StyledTextArea,
  StyledFieldset,
  StyledButton,
  GlobalStyle,
  StyledInput,
  StyledError,
} from "../components/styles/Global.style";
import ModalCadastro from "../components/ModalCadastro";

const CadastrarMedicamentos = () => {
  const initialState = {
    nome: "",
    laboratorio: "",
    preco: "",
    dosagem: "",
    tipo: "",
    descricao: "",
  };

  const [state, setState] = useState(initialState);
  const [erro, setErro] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleClear = (e) => {
    e.preventDefault();
    setState(initialState);
    setErro("");
  };

  const handleInput = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;

    setState((prev) => {
      const newState = { ...prev };
      switch (inputName) {
        case "dosagem":
          const newDosagem = value.replace(/[^\d,]/g, "");
          if (/^\d+(,\d{0,2})?$/.test(newDosagem) || newDosagem === "") {
            newState[inputName] = newDosagem;
          }
          break;
        case "preco":
          const newPreco = value.replace(/[^\d,]/g, "");
          if (/^\d+(,\d{0,2})?$/.test(newPreco) || newPreco === "") {
            newState[inputName] = newPreco;
          }
          break;
        default:
          newState[inputName] = value;
      }
      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in state) {
      if (key === "descricao") {
        continue;
      }
      if (!state[key]) {
        setErro(`O campo ${key} deve ser preenchido.`);
        return false;
      }
    }
    localStorage.setItem(`MED ${state.nome}`, JSON.stringify(state));
    setState(initialState);
    setErro("");
    setOpenModal(true);
    //navigate("/");
  };

  const navigate = useNavigate();

  return (
    <div>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm medicamento={true}>
          <h1>Cadastrar Medicamento</h1>
          <div>
            <label htmlFor="nome">
              Nome do Medicamento *
              <StyledInput
                type="text"
                name="nome"
                value={state.nome}
                onChange={handleInput}
              />
            </label>
            <label htmlFor="laboratorio">
              Nome do Laboratório *
              <StyledInput
                type="text"
                name="laboratorio"
                value={state.laboratorio}
                onChange={handleInput}
              />
            </label>
          </div>
          <div>
            <label htmlFor="preco">
              Preço *
              <StyledInput
                type="text"
                name="preco"
                value={state.preco}
                onChange={handleInput}
              />
            </label>
            <label htmlFor="dosagem">
              Dosagem *
              <StyledInput
                type="text"
                name="dosagem"
                value={state.dosagem}
                onChange={handleInput}
              />
            </label>
          </div>

          <StyledFieldset>
            <legend>Tipo</legend>
            <label>
              <input
                type="radio"
                value="comum"
                name="tipo"
                checked={state.tipo === "comum"}
                onChange={handleInput}
              />
              Comum
            </label>
            <label>
              <input
                type="radio"
                value="controlado"
                name="tipo"
                checked={state.tipo === "controlado"}
                onChange={handleInput}
              />
              Controlado
            </label>
          </StyledFieldset>

          <label htmlFor="descricao">
            Descrição
            <StyledTextArea
              name="descricao"
              value={state.descricao}
              onChange={handleInput}
            ></StyledTextArea>
          </label>
          {erro && (
            <StyledError>
              <p>{erro}</p>
            </StyledError>
          )}

          <StyledSpan>
            <StyledButton onClick={handleSubmit}>Cadastrar</StyledButton>
            <StyledButton onClick={handleClear}>Limpar</StyledButton>
          </StyledSpan>
        </StyledForm>
      </StyledFormWrapper>
      <ModalCadastro
        isOpen={openModal}
        page={"Medicamento"}
        closeModal={() => setOpenModal(false)}
      />
    </div>
  );
};

export default CadastrarMedicamentos;
