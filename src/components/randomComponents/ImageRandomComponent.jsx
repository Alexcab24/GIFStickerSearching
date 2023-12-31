import React from 'react'

const ImageRandomComponent = ({ api, openModal }) => {
    return (

        api.map(datos => (
            <div key={datos.id} className="backgroundImg bg-white rounded-md object-cover bg-blue-800 animate__animated animate__fadeIn">
                <img
                    loading='lazy'
                    alt="Images"
                    src={datos.images.original.url}
                    className="  rounded-md object-cover animate__animated animate__fadeIn"
                    onClick={() => openModal(datos)}

                />
            </div>
        ))

    )
}

export default ImageRandomComponent
