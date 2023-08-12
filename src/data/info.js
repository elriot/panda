import { getRandomTwoDigitNumber } from "./util";

export const IMAGE_INFO = {
    bg: { name: "background", count: 2, path: "/images/bg/", extension : ".jpg" },
    ha: { name: "hair accessory", count: 8, path: "/images/acc/hair/", extension : ".png" },
    ch: { name: "charactor", count: 3, path: "/images/ch/", extension : ".png" },
    ea: { name: "eye accessory", count: 6, path: "/images/acc/eye/", extension : ".png" },
}
const isValidImage = (param) => {
    if (param === null) return false;
    const code = param.substring(0, 2);
    const number = parseInt(param.substring(3, param.length));
    // console.log(code, number);
    return number > 0 && number <= IMAGE_INFO[code]["count"];
}

export const getLinks = (param) => {
    param = param.toLowerCase();
    // console.log(param);
    let bg = param.indexOf("bg") > -1 ? param.substr(param.indexOf("bg"), 4) : null;
    let ha = param.indexOf("ha") > -1 ? param.substr(param.indexOf("ha"), 4) : null;
    let ch = param.indexOf("ch") > -1 ? param.substr(param.indexOf("ch"), 4) : null;
    let ea = param.indexOf("ea") > -1 ? param.substr(param.indexOf("ea"), 4) : null;
    // console.log(bg,ha,ch,ea);
    if (isValidImage(bg))
        bg = getImageValue("bg", "path") + bg.substr(2,2) + getImageValue("bg", "extension");
    if (isValidImage(ha))
        ha = getImageValue("ha", "path") + ha.substr(2,2) + getImageValue("ha", "extension");
    if (isValidImage(ch))
        ch = getImageValue("ch", "path") + ch.substr(2,2) + getImageValue("ch", "extension");
    if (isValidImage(ea))
        ea = getImageValue("ea", "path") + ea.substr(2,2) + getImageValue("ea", "extension");

    const obj = { bg: bg, ha: ha, ch:ch, ea:ea }
    console.log(obj);
    return obj;
}

const getImageValue = (code, key) => {
    return IMAGE_INFO[code] !== null ? IMAGE_INFO[code][key] : null;
}
export const getRandomImages = () => {
    let result = "";
    
    for (let key in IMAGE_INFO) {
        const upperKey = key.toUpperCase(); // 대문자로 변환
        const randomNum = getRandomTwoDigitNumber(IMAGE_INFO[key].count);
        result += upperKey + randomNum;
    }
    console.log(result);
    return result;
}
