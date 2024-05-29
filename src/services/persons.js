import axios from "axios";

export async function getPersons(page) {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/person/popular',{
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
        console.error(error)
    }

}
export async function getSpecifiedPerson(person_id) {
    if(!person_id) {
        console.error(`Not specified person_id`)
        return;
    }
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/person/${person_id}`,{
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
        console.error(error)
    }
}
export async function getPersonsCombinedCredits(person_id) {
    if(!person_id) {
        console.error(`Not specified person_id`)
        return;
    }
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/person/${person_id}/combined_credits`,{
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
        console.error(error)
    }
}
export async function getPersonsSocial(person_id) {
    if(!person_id) {
        console.error(`Not specified person_id`)
        return;
    }
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/person/${person_id}/external_ids`,{
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
        console.error(error)
    }
}