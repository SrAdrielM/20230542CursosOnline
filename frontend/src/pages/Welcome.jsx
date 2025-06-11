import React, { useState } from "react";
import "./styles/Welcome.css"; 
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Titulo from "../components/Titulos";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <div className="container">
        <div className="card">
            <Titulo titulo="Bienvenido al administrador de cursos online" />
            <p className="description">
            En esta aplicacion web, podras visualizar, crear, eliminar y actualizar tus cursos online de manera sencilla y rapida.
            </p>
            <Button type="button" onClick={handleAccept} text="Aceptar" />
        </div>
    </div>

  );
};

export default Welcome;