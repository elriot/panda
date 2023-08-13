import { getRandomTwoDigitNumber } from "./util";

export const IMAGE_INFO = {
    bg: { name: "background", count: 2, path: "/images/bg/", extension: ".jpg", isRequired: true, iconNo: "01" },
    ch: {
        name: "charactor", count: 3, path: "/images/ch/", extension: ".png", isRequired: true, neck: "n_", iconNo: "02",
        data: {
            "01": { name: "Lebao", birth: "20120728", photo: "fubao_woni", link: "https://www.instagram.com/fubao_woni/" },
            "02": { name: "Aibao", birth: "20120713", photo: "fubao_woni", link: "https://www.instagram.com/fubao_woni/" },
            "03": { name: "Fubao", birth: "20200720", photo: "fubao_woni", link: "https://www.instagram.com/fubao_woni/" },
            "04": { name: "XiaoXiao", birth: "20210623", photo: "mainichi panda", link: "https://mainichi-panda.jp/" },
        }
    },
    ha: { name: "hair accessory", count: 9, path: "/images/acc/hair/", extension: ".png", isRequired: false, iconNo: "03" },
    ea: { name: "eye accessory", count: 6, path: "/images/acc/eye/", extension: ".png", isRequired: false, iconNo: "04" },
    ra: { name: "ear accessory", count: 3, path: "/images/acc/ear/", extension: ".png", isRequired: false, iconNo: "05" },
    na:
        { name: "neck accessory", count: 3, path: "/images/acc/neck/", extension: ".png", isRequired: false, iconNo: "06" },
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


export const getLinks = (param, isEye = true, isNeck = false) => {
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
        return { category, name, iconNo }; // 여기에 category를 추가했습니다.
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
    let start = current.isRequired === true? 1: 0;
    let itemCount = current.count + start;
    // console.log(start,itemCount);
    const path = current.path, ext = current.extension;
    for(let i = start; i < itemCount; i++){
        let imageNo = i.toString();
        if(i < 10) imageNo = "0" + imageNo;
        result.push({
            path: i > 0 ? path + imageNo + ext : 'images/none.png',
            itemNo: imageNo,
        });
    }
    return result;
}

export const getInitialCategory = () => {
    return "bg";
}