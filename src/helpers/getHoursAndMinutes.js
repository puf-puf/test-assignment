export function getHoursAndMinutes(mins) {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;

    return {hours,minutes}
}