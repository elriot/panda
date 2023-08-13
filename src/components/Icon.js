import { useEffect, useState } from "react";
import { getIconStyle } from "../data/getStyles";

export const Icon = ({ bgColor, borderColor, url, isSelected, description }) => {
    const [iconStyle, setIconStyle] = useState({});

    useEffect(() => {
        setIconStyle(getIconStyle());
    }, []);
    
    if(isSelected){
        console.log("h2");
        // setIconStyle({...iconStyle, borderWidth: '0.5em'})
    }
    // const classes = "rounded vh-25 d-flex align-items-center justify-content-center";
    const classes = "rounded m-1";    
    const finalStyle = { ...iconStyle, backgroundColor: bgColor, borderColor: borderColor, opacity: isSelected ? '1.0' : '0.4' };
    // const finalStyle = { ...iconStyle, borderWidth: isSelected ? '0.5em' : '0.3em', backgroundColor: bgColor, borderColor: borderColor, };

    return (<div
        style={finalStyle}
        className={classes}>
        <img
            src={url}
            alt={description}
            style={{ width: "100%", height: "100%" }}
        />
    </div>
    )

}