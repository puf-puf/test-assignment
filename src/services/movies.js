import axios from "axios";

export async function getMovies(page) {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular',{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US',
                    page
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }

}