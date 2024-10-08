import AddCircle from '../assets/img/Add circle.svg';
// import { UseState } from 'react';

function MainBody() {
  // const [IsModalOpen, setIsModalOpen] = UseState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="AdicionarAtividade">
      <h1 id="text-AdicionarAtividade">Atividades</h1>
      <button id="btn-AdicionarAtividade">
        <img src={AddCircle} alt="Adicionar" />
      </button>

      {/* {IsModalOpen && <Modal closeModal={closeModal} />} */}
    </div>
  );
}

// function Modal({ closeModal }) {
//   return (
//     <div>
//       <h2>Content Modal</h2>
//       <button onClick={closeModal}>X</button>
//     </div>
//   );
// }

export default MainBody;
