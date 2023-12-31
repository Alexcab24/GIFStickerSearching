import React from 'react';

const SearchComponent = ({ api, openModal }) => {

  return (
    <>
      {api.map((datos) => (
        <div className="backgroundImg bg-white rounded-md object-cover bg-blue-800" key={datos.id}>
          <img
            loading="lazy"
            alt="Images"
            src={datos.images.original.url}
            className="rounded-md object-cover"
            onClick={() => openModal(datos)}
          />
        </div>
      ))}
    </>
  );
};

export default SearchComponent;
