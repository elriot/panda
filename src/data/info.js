export const IMAGE_INFO = {
    B: { name:"background", count : 2 },
    A: { name:"accessory", count : 2 },
    C: { name:"charactor", count : 3 },
}

export const isValidImage = (param) => {
    if(param=== null) return false;
    const code = param[0];
    const number = parseInt(param.substring(1, param.length));
    return number > 0 && number <= IMAGE_INFO[code]["count"];
  }