import axios from "axios";

export async function searchForMultiData(search_query, page, include_adult = false) {
    if(!search_query) {
        console.error('No Search Query')
        return;
    }
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US',
                    include_adult,
                    query: search_query,
                    page,
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.error(error)
    }
}