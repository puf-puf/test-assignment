
export function parseActionData(actingData) {
    console.log(actingData)
    const parsedData = []
    const sortedData = {}
    actingData.map((e) => {
        const year = new Date(e.release_date).getFullYear()
        
        if(!isNaN(year) ) parsedData.push({id: e.id,year,original_title: e.original_title,character: e.character, media_type: e.media_type})

    })
    
    parsedData.map((e) => {
        if(!sortedData.hasOwnProperty(e.year)) {
            sortedData[e.year] = []
        }
        sortedData[e.year].push(e)
    })

    return sortedData
}