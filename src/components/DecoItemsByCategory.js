import { useState } from "react";
import { getItemsByCatogory } from "../data/info";
import { Icon } from "./Icon";

const DecoItemsByCategory = ({category, containerStyle, onItemClick}) => {    
    const items = getItemsByCatogory(category);
    const [currentItem, setCurrentItem] = useState("");
    const handleItemClick = (itemNo) => {
        setCurrentItem(itemNo);
        onItemClick(itemNo);
    }
    return (
        <div className={`row g-2 p-0 mt-3 row-cols-auto ${containerStyle ? containerStyle : ''}`}>
            {items.map(info => (
                <div key={info.itemNo} className="col mt-0" onClick={() => handleItemClick(info.itemNo)}>
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