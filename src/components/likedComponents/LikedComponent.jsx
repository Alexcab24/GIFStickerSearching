import React from 'react'

const LikedComponent = ({images, openModal}) => {
  return (
    images.map((image, index) => (
        <div key = {image.id} className="backgroundImg bg-white rounded-md object-cover bg-blue-800 animate__animated animate__fadeIn">
          <img
            loading='lazy'
            src={image.img}
            key={index}
            onClick={() => openModal(image)}
            className='rounded-md object-cover animate__animated animate__fadeIn'
          />
        </div>
      ))
  )
}

export default LikedComponent
