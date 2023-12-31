import { useEffect } from "react"
import axios from 'axios';
import { saveAs } from 'file-saver';

//Formateo a la data

//getLocalData de likedCopmponent
const getLocalData = ({setImages, images}) => {
    useEffect(() => {
        const storedImages = localStorage.getItem('images');
        if (storedImages) {
          const parsedImages = JSON.parse(storedImages);
          setImages(parsedImages);
        }
      }, [images]);
};



const downloadFile = async (url, fileName) => {
  try {
    const response = await axios.get(url, {
      responseType: 'blob', 
    });

  
    saveAs(response.data, fileName);
  } catch (error) {
    console.error('Error al descargar el archivo:', error);
  }
};




export {
    getLocalData,
    downloadFile,
}