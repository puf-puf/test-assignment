
export function parseActionData(actingData) {
    const parsedData = []
    const sortedData = {}
    actingData.map((e) => {
        const year = new Date(e.release_date).getFullYear()
        
        if(!isNaN(year) ) parsedData.push({year,original_title: e.original_title,character: e.character})

    })
    
    parsedData.map((e) => {
        if(!sortedData.hasOwnProperty(e.year)) {
            sortedData[e.year] = []
        }
        sortedData[e.year].push(e)
    })

    return sortedData
}