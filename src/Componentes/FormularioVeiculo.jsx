import React, { useState } from "react";

function FormularioVeiculo() {
  const [formData, setFormData] = useState({
    nome: "",
    veiculo: "",
    quilometragem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbwWtKOwkbBkFVy1DGgmri2RLxFrEBEABq9HFt6HbSAwf1eH_rWpd3QLbguRoy1HzCl0/exec"; // Substitua pelo URL do Google Apps Script

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.result === "Success") {
        alert("Dados enviados com sucesso!");
      } else {
        alert("Erro ao enviar os dados.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar os dados.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Identificação</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite seu nome"
          required
        />
      </div>
      <div>
        <label>Veículo:</label>
        <input
          type="text"
          name="veiculo"
          value={formData.veiculo}
          onChange={handleChange}
          placeholder="Digite a placa do veículo"
          required
        />
      </div>
      <div>
        <label>Quilometragem:</label>
        <input
          type="number"
          name="quilometragem"
          value={formData.quilometragem}
          onChange={handleChange}
          placeholder="Digite o Km do veículo"
          required
        />
      </div>
      <button type="submit">Avançar</button>
    </form>
  );
}

export default FormularioVeiculo;