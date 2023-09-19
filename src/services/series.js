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
export async function getSpecifiedSerie(series_id) {
    if(!series_id) console.log(`No Series ID`)
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${series_id}`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US'
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}
export async function getSpecifiedSerieCredits(series_id) {
    if(!series_id) console.log(`No Series ID`)
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${series_id}/aggregate_credits`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US'
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}
export async function getSpecifiedSerieReviews(series_id) {
    if(!series_id) console.log(`No Series ID`)
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${series_id}/reviews`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US'
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}
export async function getSpecifiedSerieRecommendations(series_id) {
    if(!series_id) console.log(`No Series ID`)
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${series_id}/recommendations`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US'
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}
export async function getSpecifiedSerieKeyWords(series_id) {
    if(!series_id) console.log(`No Series ID`)
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${series_id}/keywords`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US'
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}
export async function getSpecifiedSerieSocialLinks(series_id) {
    if(!series_id) console.log(`No Series ID`)
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${series_id}/external_ids`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US'
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}