const apiKey = 'eyHZNWOfjBcmksQFsuQEacKSE98QwpHg&q';


 function getGifts({keyword = 'morty'} = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=g&lang=en`
    return fetch(apiUrl)
      .then( resp => resp.json())
      .then( resp => {
        const {data = []} = resp
      if(Array.isArray(data)){
          const array = data.map(gift => {
          const {images, title, id} = gift;
          const url = images.downsized_medium.url;
          return {title, id, url};
        });
        return array;
      }
       
    })    
}
export default getGifts