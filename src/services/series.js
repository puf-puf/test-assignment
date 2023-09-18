import axios from "axios";

export async function getSeries(page) {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/tv/popular',{
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
export async function getSpecifiedMovie(series_id) {
    if(!series_id) console.log(`No Series ID`)
    try {
        const response = await axios.get('https://api.themoviedb.org/3/tv/',{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US',
                    series_id
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}