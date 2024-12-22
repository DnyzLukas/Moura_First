import "./App.css";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {FiSend} from "react-icons/fi";
import Userform from "./Componentes/Userform";
import ReviewForm from "./Componentes/ReviewForm";
import Thanks from "./Componentes/Thanks";

import { useForm } from "./hooks/useForm";
import {useState} from "react";
import Steps from "./Componentes/Steps";



import FormularioVeiculo from "./Componentes/FormularioVeiculo.jsx";

function App() {
  return (
    <div className="App">
      <FormularioVeiculo />
    </div>
  );
}

const formTemplate= {
  name:"",
  email: "",
  review: "",
  comment: "",
};


function App() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev)=>{
      return{...prev, [key]: value};
    });
  };

  const formComponents = [<Userform data={data} updateFieldHandler = {updateFieldHandler} />, <ReviewForm data={data} updateFieldHandler = {updateFieldHandler} />, <Thanks data={data} />
  ];

  const {currentStep, currentComponent, ChangeStep, isLastStep, isFirstStep} = useForm(formComponents)

  const handleFormSubmit = () => {
    setData(formTemplate); 
    ChangeStep(0); 
  };

  return (
    <>
      <div className="App">
        <div className="header">
          <h2>Ficha Diária de Equipamento</h2>
          <p>Caminhão Basculante</p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => ChangeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (<button type="button" onClick={() => ChangeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>)}
              { !isLastStep ? (
                <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
              ) : (<button type="button" onClick={handleFormSubmit}>
              <span>Enviar</span>
              <FiSend />
            </button>)}
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default App;
