import React, { useEffect, useState } from 'react'
import { ModalLiked } from './ModalLiked'

export const Liked = ({selectedOption}) => {
    
  const [modalLiked, setModalLiked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


    let format = 'gif'
    if(selectedOption === 'stickers'){
       format = 'png'
    }
    const [images, setImages] = useState([]);
    

   
      useEffect(() => {
        const storedImages = localStorage.getItem('images');
        if (storedImages) {
          const parsedImages = JSON.parse(storedImages);
          setImages(parsedImages);
        }
      }, [images]);

    
    
   


    const openModal = (image) => {
      setModalLiked(true);
      setSelectedItem(image);
    }

    const closeModal = () => {
      setModalLiked(false);
    }


    
   
      
 
 
 
    return (


      <>
<h1 className = 'text-3xl font-bold underline decoration-white text-red-500'>Liked</h1>
<div className='cardsContainer animate__animated animate__fadeIn'>
{
images.map((image, index) => (
  <div className="backgroundImg bg-white rounded-md object-cover bg-blue-800 animate__animated animate__fadeIn">
  <img 
        loading = 'lazy'
        src={image.img} 
        key={index} 
        onClick={() => openModal(image)}
        className='rounded-md object-cover animate__animated animate__fadeIn'
        />
  </div>
      ))}
  </div>

  {modalLiked && 
 
 <ModalLiked
    id = {selectedItem.id}
    title={selectedItem.title} 
    img={selectedItem.img}
    height = {selectedItem.height}
    width = {selectedItem.width}
   isOpen={openModal}
   onClose={closeModal}
   format = {format}
 />
 }
  </>
    )
}
