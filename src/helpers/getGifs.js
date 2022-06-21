export const getGifs = async (category) => {

    const API_KEY = `uaM4cTR9uCRWA0ENoJx2Zr4xQQGHWWWY`;
    const LIMIT = 10;

    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${LIMIT}`;


    const resp = await fetch(URL);
    const { data = [] } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });

    return gifs
};
