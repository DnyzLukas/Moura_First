
import {
  BsFillTrash3Fill,
  BsSlashSquareFill ,
  BsClipboard2Fill,
  BsArrowUpLeftSquareFill,
} from "React-icons/bs";

import "./ReviewForm.css";



const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className="review form">
      <label htmlFor="comment">Origem:</label>
      <div className="Form-control score-container-origem"> 
        <label className='radio-container'>
          <input 
           type="radio" 
           value="Reciclagem" 
           name='origem' 
           checked={data.Origem === "Reciclagem"}
           onChange={(e)=> updateFieldHandler("Origem", e.target.value)}
          /> 
          <BsArrowUpLeftSquareFill />
          <p>Reciclagem</p>
        </label>
        <label className='radio-container'>
          <input 
           type="radio"
           value="Pátio de Pedra"
           name='origem'
           checked={data.Origem === "Pátio de Pedra"}
           onChange={(e)=> updateFieldHandler("Origem", e.target.value)}
          /> 
          <BsClipboard2Fill />
          <p>Pátio de Pedra</p>
        </label>
        <label className='radio-container'>
          <input
           type="radio"
           value="Jazida"
           name='origem' 
           checked={data.Origem === "Jazida"}
           onChange={(e)=> updateFieldHandler("Origem", e.target.value)}
          /> 
          <BsSlashSquareFill />
          <p>Jazida</p>
        </label>
        <label className='radio-container'>
          <input
           type="radio"
           value="Operação"
           name='origem'
           checked={data.Origem === "Operação"}
           onChange={(e)=> updateFieldHandler("Origem", e.target.value)}
          /> 
          <BsFillTrash3Fill />
          <p>Operação</p>
        </label>
      </div>


      <label htmlFor="comment">Destino:</label>
      <div className="Form-control score-container-destino"> 
        <label className='radio-container2'>
          <input
           type="radio"
           value="Reciclagem"
           name='destino'
           checked={data.Destino === "Reciclagem"}
           onChange={(e)=> updateFieldHandler("Destino", e.target.value)}
           /> 
          <BsArrowUpLeftSquareFill />
          <p>Reciclagem</p>
        </label>
        <label className='radio-container2'>
          <input
           type="radio"
           value="Pedra"
           name='destino'
           checked={data.Destino === "Pedra"}
           onChange={(e)=> updateFieldHandler("Destino", e.target.value)}
           /> 
          <BsClipboard2Fill />
          <p>Pátio de Pedra</p>
        </label>
        <label className='radio-container2'>
          <input
           type="radio"
           value="Jazida"
           name='destino'
           checked={data.Destino === "Jazida"}
           onChange={(e)=> updateFieldHandler("Destino", e.target.value)}
           /> 
          <BsSlashSquareFill />
          <p>Jazida</p>
        </label>
        <label className='radio-container2'>
          <input 
           type="radio" 
           value="Operação"
           name='destino'
           checked={data.Destino === "Operação"}
           onChange={(e)=> updateFieldHandler("Destino", e.target.value)}
           /> 
          <BsFillTrash3Fill />
          <p>Operação</p>
        </label>


      </div>
      <label htmlFor="comment">Material:</label>
      <div className="Form-control score-container-material">
        <label className='radio-container3'>
          <input
           type="radio"
           value="Argila"
           name='material'
           checked={data.Material === "Argila"}
           onChange={(e)=> updateFieldHandler("Material", e.target.value)}
           /> 
          <BsSlashSquareFill />
          <p>Argila</p>
        </label>
        <label className='radio-container3'>
          <input
           type="radio"
           value="Pedra"
           name='material'
           checked={data.Material === "Pedra"}
           onChange={(e)=> updateFieldHandler("Material", e.target.value)}
           /> 
          <BsClipboard2Fill />
          <p>Pedra</p>
        </label>
        <label className='radio-container3'>
          <input
           type="radio"
           value="Resíduo"
           name='material'
           checked={data.Material === "Resíduo"}
           onChange={(e)=> updateFieldHandler("Material", e.target.value)}
           /> 
          <BsFillTrash3Fill />
          <p>Resíduo</p>
        </label>
      </div>
    </div>
  );
};

export default ReviewForm;
