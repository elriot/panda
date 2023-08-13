import { useState } from "react";
import { getItemsByCatogory } from "../data/info";
import { Icon } from "./Icon";

const DecoItemsByCategory = ({category, containerStyle}) => {    
    const items = getItemsByCatogory(category);
    const [currentItem, setCurrentItem] = useState("");
    console.log(containerStyle);
    const handleItemClick = () => {

    }
    return (
        <div className={`row g-2 p-0 mt-3 row-cols-auto ${containerStyle ? containerStyle : ''}`}>
            {items.map(info => (
                <div className="col mt-0" key={info.iconNo} onClick={() => handleItemClick(info.itemNo)}>
                    {/* {console.log(category)} */}
                    <Icon
                        isSelected={currentItem === info.itemNo}
                        iconNo={info.iconNo}
                        description={info.itemNo}
                        borderColor='rgba(255, 0, 25, 0.5)'
                        url={info.path}
                        bgColor='rgba(255,0,255,0.5)'
                    />                       
                </div>
            ))}
        </div>
    );
}

export default DecoItemsByCategory; 