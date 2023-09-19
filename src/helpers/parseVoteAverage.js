export function parseVoteAverage(value) {
        const numberOne = value.toString()[0]
        const numberTwo = value.toString()[2]

        return `${numberOne}${numberTwo}`
}