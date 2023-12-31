import React, { useEffect, useState } from 'react'
import { downloadFile } from '../../logic/appLogic';
import ModalComponent from './ModalComponent';




export const Modal = (props) => {


  const { id, title, img, onClose, height, width } = props;

  const [activeSettings, setActiveSettings] = useState({
    corazonVisible: false,
    active: false
  });

  useEffect(() => {
    const storedValue = localStorage.getItem(`liked-${id}`);

    if (storedValue !== null) {
      setActiveSettings(prevState => ({
        ...prevState,
        active: storedValue === 'true',
      }));
    }
  }, [id]);

  const handleClick = (img) => {
    setActiveSettings(prevState => ({
      ...prevState,
      active: !prevState.active,
    }));

    const storedImages = localStorage.getItem('images');
    const imagesArray = storedImages ? JSON.parse(storedImages) : [];
    if (activeSettings.active) {
      const imageIndex = imagesArray.findIndex(image => image.id === id);
      if (imageIndex !== -1) {
        imagesArray.splice(imageIndex, 1);
      }
    } else {
      imagesArray.push({ id, title, img, height, width });
    }
    localStorage.setItem('images', JSON.stringify(imagesArray));
    localStorage.setItem(`liked-${id}`, !activeSettings.active);
  };


  const handleDownloadClick = async (gifUrl, gifTitle) => {
    const fileName = `${gifTitle}.gif`;
    await downloadFile(gifUrl, fileName);
  };

  return (
    <>
      <ModalComponent
        activeSettings={activeSettings}
        img={img}
        title={title}
        height={height}
        width={width}
        handleDownloadClick={handleDownloadClick}
        handleClick={handleClick}
        onClose={onClose}
      />
    </>
  )
}
