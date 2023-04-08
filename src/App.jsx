import { useState} from 'react'
import './App.css'
import { Menu } from './components/Menu';
import { ModalSearch } from './components/ModalSearch';
import { useFetch } from './hooks/useFetch'

function App() {

  const [search, setSearch] = useState('')
  const [selectedOption, setSelectedOption] = useState('gifs');


  const [modal, setModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null);

  const clearSearch = () => {
    setSearch('');
  };

  const openModal = (datos) => {
    setModal(true);
    setSelectedItem(datos);
  };

  const closeModal = () => {
    setModal(false);
  };

  
const seacher = (e) => {
setSearch(e.target.value)
}

const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
}



  const {api} = useFetch(`https://api.giphy.com/v1/${selectedOption}/search?q=${search}&api_key=fvMHm5i7hexZZHP3hdXLpasa6HhBNxPE&limit=100`);


let format = 'gif'
if(selectedOption === 'stickers'){
   format = 'png'
}


  return (
    <>
    
    <header aria-label="Site Header" className="menuHeader bg-gray-100 fixed top-0 w-full z-50 rounded-b-xl  ">
  <div
    className="margen flex h-16 max-w-screen-xl items-center"
  >
  <div className="logo">
    
    <img src="https://i.ibb.co/nzjHRPk/LOGO2.png" alt="LOGO2" border="0" className="max-w-[150px] " onClick = {clearSearch} />
     </div>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Site Nav" >
        <ul className="flex items-center gap-6 text-sm">
         
          
  <div className="relative mt-1 rounded-xl mx-3">
   
    <input type="text" name="search" id="search"  placeholder="Search"  onChange = {seacher}/>
    <div className="absolute inset-y-0 right-0 flex items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl rounded-xl ">
      <label htmlFor="currency" className="sr-only">Currency</label>
      <select value={selectedOption} onChange={handleOptionChange} id="currency" name="currency"  className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-black-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-white font-bold ">
        <option value="gifs" >GIF</option>
        <option value="stickers" >Sticker</option>
      </select>
    </div>
  </div>

  <div className="social  ">
    <div className="github hidden lg:block">
    <a class="block text-teal-600" href="https://github.com/Alexcab24">
      <span class="sr-only">Github</span>
     <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="twitter" />
    </a>
    </div>
 

<div className="twitter hidden lg:block">
<a class="block text-teal-600" href="https://twitter.com/ale_jsx">
      <span class="sr-only">Twitter</span>
     <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter" />
    </a>
</div>

    
  </div>
        </ul>
      </nav>

    </div>
  </div>
  
</header>

{/* ---------------------------------------------------------------------------------------------- */}

<div className="cardsContainer animate__animated animate__fadeIn mt-20">

{search == '' ?
 <Menu selectedOption ={selectedOption}/>  
: 

  api.map((datos) => (
<div className="backgroundImg bg-white rounded-md object-cover bg-blue-800">
  
<img
    loading = 'lazy'
    key = {datos.id}
    alt="Images"
    src={datos.images.original.url}
    className="  rounded-md object-cover "
    onClick={() => openModal(datos)}
    />
  </div>
      ))
  
  
}


</div>

{modal && 
 
 <ModalSearch
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

<footer aria-label="Site Footer" className="bg-gray-100 rounded-t-xl">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
      <div className="socialFooter  ">
    <div className="github ">
    <a className="block text-teal-600" href="https://github.com/Alexcab24">
      <span className="sr-only">Github</span>
     <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="twitter" />
    </a>
    </div>
 

<div className="twitter ">
<a className="block text-teal-600" href="https://twitter.com/ale_jsx">
      <span className="sr-only">Twitter</span>
     <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter" />
    </a>
</div>

    
  </div>
      </div>
      <div className="detailsFooter">
      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
       Alex Cabral.
      </p>
      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
      Copyright &copy; 2023. All rights reserved.
      </p>
      </div>
      
    </div>
  </div>
</footer>



  </>
  )
}

export default App
