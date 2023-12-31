import { useState } from 'react'
import './App.css'
import { Menu } from './components/Menu';
import { useFetch } from './hooks/useFetch'
import SearchComponent from './components/SearchComponent';

import Header from './components/Header';
import Footer from './components/Footer';
import { Modal } from './components/modalComponents/Modal';



function App() {

  const [search, setSearch] = useState('')
  const [selectedOption, setSelectedOption] = useState('gifs');
  const [modal, setModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState();



  // Group modal-related functions
  const openModal = (datos) => {
    setModal(true);
    setSelectedItem(datos);
  };
  const closeModal = () => {
    setModal(false);
  };

  // Group input-related functions
  const seacher = (e) => {
    setSearch(e.target.value)
  }
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }


  const { api } = useFetch(`https://api.giphy.com/v1/${selectedOption}/search?q=${search}&api_key=fvMHm5i7hexZZHP3hdXLpasa6HhBNxPE&limit=100`);
 
  return (
    <>
      <Header
        selectedOption={selectedOption}
        seacher={seacher}
        handleOptionChange={handleOptionChange}
      />

      <div className="cardsContainer animate__animated animate__fadeIn mt-20">
        {search == '' ?
          <Menu selectedOption={selectedOption} />
          :
          <SearchComponent api={api} openModal={openModal} />
        }
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
      <Footer />
    </>
  )
}

export default App
