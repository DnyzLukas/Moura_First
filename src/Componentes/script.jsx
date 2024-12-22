import React, { useState } from "react";

function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    veiculo: "",
    km: "",
    origem: "",
    destino: "",
    material: "",
  });  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbwgB_H8-DFjQtoveX6vBloF0_JsBZPqunOUJ9yWZCDd1nQH3Q7isyTqz_T0JXhrxUsE/exec"; // Substitua pelo URL do script do Google Sheets

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Veiculo:</label>
        <input
          type="text"
          name="veiculo"
          value={formData.veiculo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Km:</label>
        <textarea
          name="Km"
          value={formData.km}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;