import { useEffect, useState } from 'react'

export const useFetch = (URL) => {

const [api, setApi] = useState([]);
const [isLoading, setIsLoading] = useState(true);



useEffect(() => {
  getData();
}, [URL])



const getData = async() => {
  try {
    await fetch(URL)
    .then(resp => resp.json())
    .then(results => setApi(results.data));
   
    setIsLoading(false); 
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
     
}



return {
    api,
    isLoading,    
}
  
}
