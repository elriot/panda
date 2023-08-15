import { getRandomTwoDigitNumber } from "./util";

export const IMAGE_INFO = {
    bg: { name: "background", count: 2, path: "/images/bg/", extension: ".jpg", isRequired: true, iconNo: "01" },
    ch: {
        name: "charactor", count: 4, path: "/images/ch/", extension: ".png", isRequired: true, neck: "n_", iconNo: "02",
    },
    ha: { name: "hair accessory", count: 9, path: "/images/acc/hair/", extension: ".png", isRequired: false, iconNo: "03" },
    ea: { name: "eye accessory", count: 7, path: "/images/acc/eye/", extension: ".png", isRequired: false, iconNo: "04" },
    ra: { name: "ear accessory", count: 4, path: "/images/acc/ear/", extension: ".png", isRequired: false, iconNo: "05" },
    na: { name: "neck accessory", count: 3, path: "/images/acc/neck/", extension: ".png", isRequired: false, iconNo: "06" },
}

const PANDA_INFO = {
    "01": { chineseName: "乐宝", name: "Lebao", gender:"Male", birth: "20120728", address:"Everland, South Korea", photo: "fubao_woni", link: "https://www.instagram.com/fubao_woni/", color: "lightblue"},
    "02": { chineseName: "爱宝", name: "Aibao", gender:"Female" ,birth: "20120713", address:"Everland, South Korea", photo: "fubao_woni", link: "https://www.instagram.com/fubao_woni/", color: "#ffc6c6" },
    "03": { chineseName: "福宝", name: "Fubao", gender: "Female", birth: "20120720", address:"Everland, South Korea", photo: "fubao_woni", link: "https://www.instagram.com/fubao_woni/" , color:"lightgoldenrodyellow"},
    "04": { chineseName: "暁暁", name: "XiaoXiao", gender:"Male", birth: "20210623", address:"Ueno Zoo, Japan", photo: "mainichi panda", link: "https://mainichi-panda.jp/", color:"lightseagreen" },
}

const CATEGORY_ICON_INFO = {
    category: { path: "/images/icons/category/", extension: ".jpg" },
}


const isValidImage = (param) => {
    if (param === null) return false;
    const code = param.substring(0, 2);
    const number = parseInt(param.substring(3, param.length));
    // console.log(code, number);
    return number > 0 && number <= IMAGE_INFO[code]["count"];
}
const isValidImageByCategory= (category, imgNo) => {
    const number = parseInt(imgNo);
    return number > 0 && number <= IMAGE_INFO[category]["count"];
}


export const getLinksByString = (param, isEye = true, isNeck = false) => {
    param = param.toLowerCase();
    let result = {};

    for (let key in IMAGE_INFO) {
        if (param.includes(key)) {
            if (key === "na" && !isNeck) continue;
            if (key === "ea" && !isEye) continue;
            let value = param.substr(param.indexOf(key), 4);
            if (isValidImage(value)) {
                result[key] = getImageValue(key, "path") + (key === "ch" && isNeck === true ? IMAGE_INFO["ch"]["neck"] : "") + value.substr(2, 2) + getImageValue(key, "extension");
            }
        }
    }

    return result;
}
export const getLinksByObject = (object) => {  
    const result = {};  

    const isNect = object["na"] && isValidImageByCategory("na", object["na"]) ? "n_" : "";
    // console.log("isNect", isNect, object["na"]);
    for (let key in object) {
        const detail = (key ==="ch") ? isNect + object[key] : object[key];
        if (IMAGE_INFO[key]) {
            // console.log("here2222");
            // if (key === "na" && !isNeck) continue;
            // if (key === "ea" && !isEye) continue;            
            if (isValidImageByCategory(key, object[key])) { 
                const path = getImageValue(key, "path") 
                + detail
                + getImageValue(key, "extension");
                result[key] = path;
                    
            }
        }
    }
    return result;
}


const getImageValue = (code, key) => {
    return IMAGE_INFO[code] !== null ? IMAGE_INFO[code][key] : null;
}
export const getRandomImages = () => {
    const result = {};
    for (let key in IMAGE_INFO) {
        const randomNum = getRandomTwoDigitNumber(IMAGE_INFO[key]["count"]);
        result[key] = randomNum;
    }
    // console.log(result);
    return result;
}

export const getAllCategoryInfo = () => {
    const result = Object.keys(IMAGE_INFO).map(category => {
        const { name, iconNo } = IMAGE_INFO[category];
        return { category, name, iconNo }; // 여기에 category를 추가
    });

    return result;
}

export const getCategoryIconImageByNo = (IconNo) => {
    return CATEGORY_ICON_INFO.category.path + IconNo + CATEGORY_ICON_INFO.category.extension;
}

export const initionDecoInfo = () => {
    const result = {};
    for (const category in IMAGE_INFO) {
      const isRequired = IMAGE_INFO[category].isRequired;
      const iconNo = isRequired ? "01" : "00";
      result[category] = iconNo;
    }
    return result;
}

export const getItemsByCatogory = (category) => {
    if(category === undefined) return null;
    const current = IMAGE_INFO[category];
    const result = [];    
    let itemCount = current.count;
    // console.log(itemCount)
    
    // console.log(start,itemCount);
    const path = current.path, ext = current.extension;
    if(current.isRequired === false)
        result.push({path:'/images/none.png', itemNo: '00'});
    
    for(let i = 1; i <= itemCount; i++){
        let imageNo = i.toString();
        if(i < 10) imageNo = "0" + imageNo;
        result.push({
            path: path + imageNo + ext,
            itemNo: imageNo,
        });
    }
    return result;
}

export const getInitialInfo = () => {
    return {category : "bg", item : "01"};
}

export const getDecoInfoByString = (param) => {
    param = param.toLowerCase();
    const keys = Object.keys(IMAGE_INFO);
    const result = {};
    for (const el of keys) {
        const index = param.indexOf(el);
        if(index !== -1){
            result[el] = param.substr(index+2, 2);
        }
    }
    return result;
}
const getPandaPhotoByNo = (no) =>{
    return IMAGE_INFO["ch"]["path"] + no + IMAGE_INFO["ch"]["extension"];
}
export const getPandaInfoByNo = (no) => {
    return {...PANDA_INFO[no], image : getPandaPhotoByNo(no)};
}