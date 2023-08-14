export const getParam = (paramName) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(paramName);
}

export const getRandomTwoDigitNumber = (max, extra = "0") => {
    const number = Math.floor(Math.random() * max+1) ; 
    return number.toString().padStart(2, '0'); 
}

export function addAlphaToHex(hex, alpha) { // alpha range : 0 ~ 1
    // alpha는 0과 1 사이의 값으로 전달됩니다.
    const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0').toUpperCase();
    return `${hex}${alphaHex}`;
}