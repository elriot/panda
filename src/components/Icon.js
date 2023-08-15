import { useEffect, useState } from "react";
import { getIconStyle } from "../data/getStyles";
import { addAlphaToHex, getPublicURL } from "../data/util";

export const Icon = ({ backgroundColor, borderColor, url, isSelected, description }) => {
    const [iconStyle, setIconStyle] = useState({});

    useEffect(() => {
        setIconStyle(getIconStyle());
    }, []);
    
    const classes = "rounded m-1";    
    const finalStyle = { 
        ...iconStyle, 
        backgroundColor: backgroundColor,         
        borderColor: isSelected === true? borderColor : addAlphaToHex(borderColor, 0.2),        
    }
    

    return (<div
        style={finalStyle}
        className={classes}>
        <img
            src={getPublicURL(url)}
            alt={description}
            style={{ width: "100%", height: "100%" }}
        />
    </div>
    )

}