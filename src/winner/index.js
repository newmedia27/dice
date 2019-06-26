export const getWinnerStore = () => {

    if (localStorage.getItem('winner')) {
        return JSON.parse(localStorage.getItem('winner'));
    } else {
        return [];
    }
}
export const validatePlayer = (str) => {
    return !(getWinnerStore().length && getWinnerStore().some(e => e.name === str));
}
