export const getParam = (paramName) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(paramName);
}

export const getRandomTwoDigitNumber = (max, extra = "0") => {
    const number = Math.floor(Math.random() * max) + 1 - extra; 
    return number.toString().padStart(2, '0'); 
}
