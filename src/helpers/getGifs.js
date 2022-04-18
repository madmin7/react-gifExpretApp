

export const obtenerGif = async ( cat ) => {  

    const url = `https://api.giphy.com/v1/gifs/search?api_key=beS5CYJQ8ufqsoH8jFacF7PaItaw7NAM&q=${ encodeURI(cat) }&limit=10`;
    
    const resp = await fetch(url, {
        method: "GET"
    })

    const { data } = await resp.json();

    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })


    return gifs
}