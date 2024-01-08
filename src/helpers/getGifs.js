export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9fNLWDsmskFKmsDUiSVtBDzI1bOiw2j3&q=${category}`
    const response = await fetch(url);

    if (response.ok) {
        const { data } = await response.json();
        

        if (data.length === 0) {
            console.log("No existen GIFs para esta categoría");
            return []; // Retorna un arreglo vacío si no hay datos
        }


        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        
        return gifs;
    } else {

        console.log("Error al obtener los GIFs");
        // Puedes manejar el error de otra manera si es necesario
        throw new Error("Error al obtener los GIFs");
    }
}
