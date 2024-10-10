import AddCircle from '../assets/img/Add circle.svg';
import FecharModal from '../assets/img/modal-atividade/X.svg';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Calendar from '../assets/img/modal-atividade/calendarIcon.svg';
import Lapis from '../assets/img/modal-atividade/Lapis.svg';
import './style/MainBody.css';

function MainBody() {
  const [IsModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {!IsModalOpen && (
        <div className="AdicionarAtividade">
          <h1 id="text-AdicionarAtividade">Atividades</h1>
          <button id="btn-AdicionarAtividade" onClick={openModal}>
            <img src={AddCircle} alt="Adicionar" />
          </button>
        </div>
      )}
      {IsModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

function Modal({ closeModal }) {
  return (
    <div className="TaskForm">
      <div className="ContentTaskForm">
        <div className="HeaderModal">
          <img src={Calendar} alt="Calendario Imagem" />
          <u>
            <h1>Atividade</h1>
          </u>
          <img src={Lapis} id="Lapis" alt="Icone Lapis" />
          <button onClick={closeModal} id="btnFecharModal">
            <img src={FecharModal} alt="Fechar Modal" id="FecharModalIcon" />
          </button>
        </div>
        <div className="form-group">
          <span>Título:</span>
          <input type="text" />
        </div>
        <div className="form-group">
          <span>Data:</span>
          <input type="date" />
        </div>
        <div className="form-group">
          <span>Descrição:</span>
          <input type="text" />
        </div>
        <div className="form-group">
          <span>Prioridade:</span>
          <Form.Select>
            <option value="default" disabled selected>
              Selecione a prioridade
            </option>
            <option value="high">Alta prioridade</option>
            <option value="medium">Media prioridade</option>
            <option value="low">Baixa prioridade</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="CardSection">
      <div className="singleCard">
        <div className="cardHeader">
          <h1>Title</h1>
          <p>Data</p>
        </div>

        <p>description</p>

        <div className="cardFooter">
          <button className="btnCompletedTask"></button>
          <button className="btnCanceleTask"></button>
          <button className="btnEditTask"></button>
        </div>
      </div>
    </div>
  );
}
export default MainBody;
