import { useContext, useState } from "react";
import { getScrollX, getScrollY } from "../data/getStyles";
import DecoCategory from "./DecoCategory";
import DecoItemsByCategory from "./DecoItemsByCategory";
import { useDecoInfo } from "../context/DecoInfoContext";
import { useOpenedCategory } from "../context/OpenedCategoryContext";

const PandaDecoOptions = ({ category, item, style, className}) => {
    const { decoInfo, setDecoInfo } = useDecoInfo();
    const { openCategory, setOpenCategory }  = useOpenedCategory();
    
    const [currentCategory, setCurrentCategory] = useState(openCategory);    
    const [currentItem, setCurrentItem] = useState(decoInfo[openCategory]);

    const handleClickCategory = (category) => {
        setOpenCategory(category);
        setCurrentCategory(category);
        console.log('handleClickCategory', category, decoInfo[category]);
        setCurrentItem(decoInfo[category]);  
    }
    
    const handleClickItem = (item) => {        
        setCurrentItem(item);
        updateValue(currentCategory, item);
    }
    const updateValue = (key, newValue) => {
        setDecoInfo(prevState => ({ ...prevState, [key]: newValue }));
    }

    return (
        <div style={style} className={className}>
            <div style={{height:"100%" }}>
                <div className="container" style={{backgroundColor : 'rgba(0,0,0,0.05)'}}>
                {/* <div className="container" style={{}}> */}
                    <DecoCategory category={currentCategory} onClick={handleClickCategory} containerStyle={getScrollX()} />
                </div>
                {/* <div className="container" style={{height:"100%", overflowY: 'auto', backgroundColor:"white"}}> */}
                <div className="container bg-white" style={{overflowY: 'auto'}}>
                    <DecoItemsByCategory category={currentCategory} item={decoInfo[openCategory]} containerStyle={getScrollY()} onItemClick={handleClickItem}/>
                </div>
            </div>
        </div>

    );
}

export default PandaDecoOptions;