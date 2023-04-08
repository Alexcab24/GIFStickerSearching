import React, { useEffect, useState } from 'react'

export const ModalSearch = (props) => {


    const { id, title, img, onClose, format, height, width } = props;
    const [corazonVisible, setCorazonVisible] = useState(false);

    const [active, setActive] = useState(false);

   useEffect(() => {
      const storedValue = localStorage.getItem(`liked-${id}`);
      if (storedValue !== null) {
        setActive(storedValue === 'true');
      }
    }, [id]);
    
    const handleClick = (img) => {
      setActive(!active);


      const storedImages = localStorage.getItem('images');
      const imagesArray = storedImages ? JSON.parse(storedImages) : [];
      if (active) {
        const imageIndex = imagesArray.findIndex(image => image.id === id);
        if (imageIndex !== -1) {
          imagesArray.splice(imageIndex, 1);
        }
      } else {
        imagesArray.push({ id, title, img, height, width });
      }



      
     localStorage.setItem('images', JSON.stringify(imagesArray));
       
      localStorage.setItem(`liked-${id}`, !active);
    };

    const handleDownloadClick = async (gifUrl, gifTitle) => {

        const response = await fetch(gifUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${gifTitle}.${format}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };

    

      const dobleClick = () => {
        const storedImages = localStorage.getItem('images');
        const imagesArray = storedImages ? JSON.parse(storedImages) : [];
        if (active) {
          const imageIndex = imagesArray.findIndex(image => image.id === id);
          if (imageIndex !== -1) {
            imagesArray.splice(imageIndex, 1);
          }
        } else {
          imagesArray.push({ id, title, img, height, width });
        }
  
  
  
        
       localStorage.setItem('images', JSON.stringify(imagesArray));

        localStorage.setItem(`liked-${id}`, !active);
        console.log('funciona')
        setCorazonVisible(true);
        setActive(true);
        setTimeout(() => {
          setCorazonVisible(false);
        }, 1000);
      }
      

  return (
   <>
<div className="ModalContainer inset-x-0 bottom-0 left-0 animate__animated animate__fadeIn ">
  <div className="relative max-w-xl rounded-lg bg-blue-600 p-6 shadow-sm border-4 bg-gradient-to-br from-blue-500 to-teal-500 ">
    <button
      type="button"
      onClick={onClose}
      className="absolute -top-2 -right-2 rounded-full border border-gray-200 bg-white p-2 text-gray-400"
    >
      <span className="sr-only">Close</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <img
        alt="Laptop"
        src={img}
        className="h-full w-full rounded-xl object-cover"
        onDoubleClick={dobleClick}
       
      />
       {corazonVisible && (
        <div className="corazon-animation">
        <img className = 'animate__animated animate__heartBeat drop-shadow-2xl' src='https://cdn-icons-png.flaticon.com/512/6681/6681831.png'/>
        </div>
      )}
     
    

      <div>
      <h1 className="text-2xl font-bold text-white">
        {title}
        </h1>
        

      <div className="detailsContainer">
        
      <p className = 'font-bold text-white'>Dimensión: </p>
   <p>{height} x {width}</p>
       

        {/* botton */}
     
        <div className="buttons">
      <a
    className="group relative inline-block focus:outline-none focus:ring m-3"
    onClick={() => handleDownloadClick(img, title)}
  >
    <span
      className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-900 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
    ></span>
  
    <span
      className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75"
    >
      Download
    </span>
  </a>
  <button
      className={active ? ' liken-button active animate__animated animate__heartBeat' : 'liken-button ' }
      onClick={() => handleClick(img)}
    />

      </div>
 
      </div>
    
   
      </div>
    </div>
  </div>
</div>
   </>
  )
}
