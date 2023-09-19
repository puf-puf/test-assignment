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

export async function getSpecifiedMovie(movie_id) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US',
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}

export async function getSpecifiedMovieKeyWords(movie_id) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/keywords`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US',
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}

export async function getSpecifiedMovieSocialLinks(movie_id) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/external_ids`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US',
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}

export async function getSpecifiedMovieReviews(movie_id) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US',
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}

export async function getSpecifiedMovieRecommendations(movie_id) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US',
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}
export async function getSpecifiedMovieCredits(movie_id) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US',
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}

export async function getTrendingMovies(time_window) {
    if(time_window !== 'day' && time_window !== 'week') {
        console.error('Wrong Time Window')
        return;
    }
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/${time_window}`,{
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_READ_TOKEN}`
                },
                params: {
                    language: 'en-US',
                }
            })
        const responseData = response.data

        return responseData
    } catch (error) {
        console.log(error)
    }
}