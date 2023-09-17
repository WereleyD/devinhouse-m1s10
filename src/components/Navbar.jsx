import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [medOpen, setMedOpen] = useState(false);
  const [farmaOpen, setFarmaOpen] = useState(false);

  const handleFarmaDropdown = () => {
    setFarmaOpen(!farmaOpen);
  };

  const handleMedDropdown = () => {
    setMedOpen(!medOpen);
  };
  return (
    <nav>
      <Link to="/">Medicamentos</Link>
      <Link to="/cadastrarmedicamentos">Cadastrar Medicamento</Link>
    </nav>
  );
};

export default Navbar;
