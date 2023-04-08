import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Modal } from "./Modal";

export const Random = ({selectedOption}) => {
  
    const openModal = (datos) => {
      setModal(true);
      setSelectedItem(datos);
    }

    const closeModal = () => {
      setModal(false);
    }

  


  const {api} = useFetch(`https://api.giphy.com/v1/${selectedOption}/trending?&api_key=fvMHm5i7hexZZHP3hdXLpasa6HhBNxPE&=limit=20`);
 
  

 

   
   
      
    let format = 'gif'
    if(selectedOption === 'stickers'){
       format = 'png'
    }

    const [modal, setModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);

 
 
    return (
      <>
<h1 className = 'text-3xl font-bold underline decoration-orange-500 text-amber-500 justify-start'>Trending</h1>

<div className="cardsContainer animate__animated animate__fadeIn">
  {
api.map(datos => (
  <div className="backgroundImg bg-white rounded-md object-cover bg-blue-800 animate__animated animate__fadeIn">
  <img
  loading = 'lazy'
   key = {datos.id}
  alt="Images"
  src={datos.images.original.url}
  className="  rounded-md object-cover animate__animated animate__fadeIn"
  onClick={() => openModal(datos) }
  
  /> 
    </div>  


      ))


  }
  </div>

  {modal && 
 
<Modal 
   id = {selectedItem.id}
   title={selectedItem.title} 
   img={selectedItem.images.original.url}
   height = {selectedItem.images.original.height}
   width = {selectedItem.images.original.width}
  isOpen={openModal}
  onClose={closeModal}
  format = {format}
/>
}
  </>
    
  )
}
