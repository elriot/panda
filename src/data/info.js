import { getRandomTwoDigitNumber } from "./util";

export const IMAGE_INFO = {
    bg: { name: "background", count: 2, path: "/images/bg/", extension: ".jpg", isRequired:true, iconNo: "01"},
    ch: {
        name: "charactor", count: 3, path: "/images/ch/", extension: ".png", isRequired:false, neck:"n_",  iconNo: "02",
        data: { 
            "01": { name: "Lebao", birth: "20120728", photo:"fubao_woni", link:"https://www.instagram.com/fubao_woni/"}, 
            "02": { name: "Aibao", birth: "20120713", photo:"fubao_woni", link:"https://www.instagram.com/fubao_woni/"}, 
            "03": { name: "Fubao", birth: "20200720", photo:"fubao_woni", link:"https://www.instagram.com/fubao_woni/"},
            "04": { name: "XiaoXiao", birth: "20210623", photo:"mainichi panda", link:"https://mainichi-panda.jp/"},
        }
    },    
    ha: { name: "hair accessory", count: 8, path: "/images/acc/hair/", extension: ".png", isRequired:true , iconNo: "03"},
    ea: { name: "eye accessory", count: 6, path: "/images/acc/eye/", extension: ".png", isRequired:false, iconNo: "04"},
    ra: { name: "ear accessory", count: 3, path: "/images/acc/ear/", extension: ".png", isRequired:false, iconNo: "05"},
    na: 
    { name: "neck accessory", count: 3, path: "/images/acc/neck/", extension: ".png",isRequired:false, iconNo: "06"},
}


const isValidImage = (param) => {
    if (param === null) return false;
    const code = param.substring(0, 2);
    const number = parseInt(param.substring(3, param.length));
    // console.log(code, number);
    return number > 0 && number <= IMAGE_INFO[code]["count"];
}


export const getLinks = (param, isEye = true, isNeck = false) => {
    param = param.toLowerCase();
    let result = {};

    for (let key in IMAGE_INFO) {
        if (param.includes(key)) {
            if(key ==="na" && !isNeck) continue;
            if(key ==="ea" && !isEye) continue;
            let value = param.substr(param.indexOf(key), 4);            
            if (isValidImage(value)) {
                result[key] = getImageValue(key, "path") + (key==="ch" && isNeck === true? IMAGE_INFO["ch"]["neck"] : "")+value.substr(2, 2) + getImageValue(key, "extension");
            }
        }
    }

    return result;
}


const getImageValue = (code, key) => {
    return IMAGE_INFO[code] !== null ? IMAGE_INFO[code][key] : null;
}
export const getRandomImages = () => {
    let result = "";

    for (let key in IMAGE_INFO) {
        const randomNum = getRandomTwoDigitNumber(IMAGE_INFO[key].count) + (IMAGE_INFO[key].isRequired ? 1 : 0);
        result += key + randomNum;
    }

    return result;
}

export const getAllCategoryInfo = () => {
    const result = Object.keys(IMAGE_INFO).map(category => {
        const { name, iconNo } = IMAGE_INFO[category];
        return { name, iconNo };
      });
    
      return result;
}