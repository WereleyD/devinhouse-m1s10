import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { GlobalStyle } from "../components/styles/Global.style";
import {
  StyledCardGrid,
  StyledCardContainer,
  StyledCardWrapper,
  StyledSearchWrapper,
  StyledCard,
} from "../components/styles/Medicamentos.style";

const Medicamentos = () => {
  const [lista, setLista] = useState([]);
  const [search, setSearch] = useState("");

  const updateList = (itemId, newValue) => {
    const updatedList = lista.map((item) => {
      if (item.id === itemId) {
        return { ...item, openModal: newValue };
      }
      return item;
    });
    setLista(updatedList);
  };

  const findMeds = () => {
    const items = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = localStorage.getItem(key);
      if (key.toLowerCase().includes("med")) {
        const newItem = JSON.parse(item);
        newItem.id = i;
        newItem.openModal = false;
        items.push(newItem);
      }
    }
    return items;
  };

  useEffect(() => {
    const medicamentos = findMeds();
    setLista(medicamentos);
  }, []);

  return (
    <div>
      <GlobalStyle />
      <StyledCardWrapper>
        <StyledCardContainer>
          <StyledSearchWrapper>
            <h1>Medicamentos</h1>
            <div>
              <h3>Pesquisar:</h3>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Digite para pesquisar..."
              />
            </div>
          </StyledSearchWrapper>
          <StyledCardGrid>
            {lista
              .filter((item) =>
                item.nome.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <StyledCard key={item.id}>
                  <div
                    onClick={() => updateList(item.id, (item.openModal = true))}
                  >
                    <img src="/remedio.jpg" alt="" />
                    <h3>{item.nome}</h3>
                    <p>{item.laboratorio}</p>
                  </div>
                  <Modal
                    isOpen={item.openModal}
                    closeModal={() =>
                      updateList(item.id, (item.openModal = false))
                    }
                    nome={item.nome}
                    laboratorio={item.laboratorio}
                    dosagem={item.dosagem}
                    tipo={item.tipo}
                    preco={item.preco}
                    descricao={item.descricao}
                  />
                </StyledCard>
              ))}
          </StyledCardGrid>
        </StyledCardContainer>
      </StyledCardWrapper>
    </div>
  );
};

export default Medicamentos;
