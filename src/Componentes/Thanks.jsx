
import React, { useState, useEffect } from 'react';
import './Thanks.css';

const Thanks = ({ data }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <div className="thanks-container">
      <p>Para concluir clique em enviar</p>
      <h3>Resumo:</h3>
      <p className="review-data">
        <h2>Identificação:</h2>
      </p>
      <p className="review-data">
        <span>Nome: {data.name}</span>
      </p>
      <p className="review-data">
        <span>Caminhão: {data.ID}</span>
      </p>
      <p className="review-data">
        <span>Km: {data.number}</span>
      </p>
      <p className="review-data">
        <h2>Atividade:</h2>
      </p>
      <p className="review-data">
        <span>Origem: {data.Origem}</span>
      </p>
      <p className="review-data">
        <span>Destino: {data.Destino}</span>
      </p>
      <p className="review-data">
        <span>Material: {data.Material}</span>
      </p>
      <p className="review-data">
        <h2>Data e Hora:</h2>
        <span>{currentDateTime.toLocaleString()}</span>
      </p>
    </div>
  );
};

export default Thanks;
