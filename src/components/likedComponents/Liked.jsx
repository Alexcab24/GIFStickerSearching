import React, { useState } from 'react'
import LikedComponent from './LikedComponent';
import { getLocalData } from '../../logic/appLogic';
import { Modal } from '../modalComponents/Modal';

export const Liked = () => {

  const [modalLiked, setModalLiked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [images, setImages] = useState([]);

  getLocalData({ setImages, images });

  const openModal = (image) => {
    setModalLiked(true);
    setSelectedItem(image);
  };

  const closeModal = () => {
    setModalLiked(false);
  };


  return (
    <>
      <h1 className='text-3xl font-bold underline decoration-white text-red-500'>Liked</h1>
      <div className='cardsContainer animate__animated animate__fadeIn'>
        <LikedComponent images={images} openModal={openModal} />
      </div>

      {modalLiked &&
        <Modal
          id={selectedItem.id}
          title={selectedItem.title}
          img={selectedItem.img}
          height={selectedItem.height}
          width={selectedItem.width}
          isOpen={openModal}
          onClose={closeModal}
        />
      }
    </>
  )
}
