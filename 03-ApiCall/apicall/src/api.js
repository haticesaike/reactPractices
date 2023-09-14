import axios from 'axios';

const searchImages = async (term) => {
    const response= await axios.get('https://api.unsplash.com/search/photos', {
  
      headers: {
        Authorization:'Client-ID gCpUHqH64FDbNQ5_HBcDAp_mHGio6t9aeu5xB0uT4y4'
      },
      params:{
        query:term
      }
    })
    return response.data.results; 
  
  
  }

  export default searchImages;