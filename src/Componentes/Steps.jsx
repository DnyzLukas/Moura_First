import {AiOutlineUser, AiOutlineStar} from "react-icons/ai"
import { FiSend } from "react-icons/fi";

import "./Steps.css";

const Steps = ({currentStep}) => {
  return (<div className="Steps">
    <div className="Step active">
        <AiOutlineUser />
        <p>Identificação</p>
    </div>
    <div className={`Step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Atividade</p>
    </div>
    <div className={`Step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
    </div>
  </div>
  )
}

export default Steps
