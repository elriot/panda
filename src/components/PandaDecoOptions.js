import { useState } from "react";
import { getScrollX } from "../data/getStyles";
import DecoCategory from "./DecoCategory";
import DecoItemsByCategory from "./DecoItemsByCategory";
import { useDecoInfo } from "../context/DecoInfoContext";
import { useOpenedCategory } from "../context/OpenedCategoryContext";
import classNames from "classnames";

const PandaDecoOptions = ({ style, className}) => {
    const { decoInfo, setDecoInfo } = useDecoInfo();
    const { openCategory, setOpenCategory }  = useOpenedCategory();
    
    const [currentCategory, setCurrentCategory] = useState(openCategory);    
    const [currentItem, setCurrentItem] = useState(decoInfo[openCategory]);

    const handleClickCategory = (category) => {
        setOpenCategory(category);
        setCurrentCategory(category);
        setCurrentItem(decoInfo[category]);  
    }
    
    const handleClickItem = (item) => {        
        setCurrentItem(item);
        updateValue(currentCategory, item);
    }
    const updateValue = (key, newValue) => {
        setDecoInfo(prevState => ({ ...prevState, [key]: newValue }));
    }
    // const finalStyle = {...style, justifyContent: 'center', alignItems: 'center'};
    const finalStyle = style;
    // console.log(style);
    return (
        <div style={finalStyle} className={className} id="render">
            <div style={{height:"100%" }}>
                <div className="container" style={{backgroundColor : 'rgba(0,0,0,0.05)'}}>
                    <DecoCategory category={currentCategory} onClick={handleClickCategory} containerStyle={getScrollX()} />
                </div>
                <div className={classNames("container bg-white")} style={{overflowY: 'auto', overflowX:'auto', height:"170px"}} >
                    <DecoItemsByCategory style={{}}category={currentCategory} item={decoInfo[openCategory]} containerStyle={{}} onItemClick={handleClickItem}/>
                </div>
            </div>
        </div>

    );
}

export default PandaDecoOptions;