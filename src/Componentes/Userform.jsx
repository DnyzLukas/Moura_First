import React from "react"


const Userform = ({data, updateFieldHandler}) => {
  return (
    <div>
      <div className="Form-control">
        <label htmlFor="name">Nome:</label>
        <input 
        type="text" 
        name="text" 
        id="name" 
        placeholder="Digite seu nome" 
        required
        value={data.name || ""}
        onChange={(e)=> updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className="Form-control">
        <label htmlFor="ID">Veículo:</label>
        <input 
        type="ID" 
        name="ID" 
        id="ID" 
        placeholder="Digite a placa do veículo"
        required
        value={data.ID || ""}
        onChange={(e)=> updateFieldHandler("ID", e.target.value)} 
        />
      </div>
      <div className="Form-control">
        <label htmlFor="value">Quilometragem:</label>
        <input 
        type="number" 
        step="0.1"
        placeholder="Digite o Km do veículo" 
        required
        value={data.number || ""}
        onChange={(e)=> updateFieldHandler("number", e.target.value)} 
        />
      </div>
    </div>
  );
};

export default Userform;
