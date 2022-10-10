
export const getGifs = async(category) => {
    const apiKey = 'AUYfUjLzmTejVnusChaG82T5URGGVJa7';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    try{
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map((image)=> ({
            id: image.id,
            title: image.title,
            url: image.images.downsized_medium.url
        }))
        return gifs;
    }catch(err){
        console.log('Ha ocurrido un error' + err);
    }
    // console.log(gifs);
}