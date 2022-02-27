export const getGifs = async ( category ) => {
        
    const URL =  `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=OJLTpIYB65WFJjOAXYbmgUPe7532vbLw`  ;
    const resp = await fetch( URL )
    const {data} =  await resp.json();

    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title:gif.title,
            images: gif.images.downsized_medium.url

        }
    })
   

    return gifs;
}