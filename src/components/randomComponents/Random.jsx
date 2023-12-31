import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";


import ImageRandomComponent from "./ImageRandomComponent";
import { Modal } from "../modalComponents/Modal";


export const Random = ({ selectedOption }) => {

  const [modal, setModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (datos) => {
    setModal(true);
    setSelectedItem(datos);
  }

  const closeModal = () => {
    setModal(false);
  }


  const { api } = useFetch(`https://api.giphy.com/v1/${selectedOption}/trending?&api_key=fvMHm5i7hexZZHP3hdXLpasa6HhBNxPE&=limit=20`);





  return (
    <>
      <h1 className='text-3xl font-bold underline decoration-orange-500 text-amber-500 justify-start'>Trending</h1>
      <div className="cardsContainer animate__animated animate__fadeIn">
        <ImageRandomComponent api={api} openModal={openModal} />
      </div>

      {modal &&
        <Modal
          id={selectedItem.id}
          title={selectedItem.title}
          img={selectedItem.images.original.url}
          height={selectedItem.images.original.height}
          width={selectedItem.images.original.width}
          isOpen={openModal}
          onClose={closeModal}
        />
      }
    </>

  )
}
