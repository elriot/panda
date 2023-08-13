import { useContext, useEffect, useState } from "react";
import { getScrollX, getScrollY } from "../data/getStyles";
import DecoCategory from "./DecoCategory";
import DecoItemsByCategory from "./DecoItemsByCategory";
import { getAllCategoryInfo } from "../data/info";
import DecoInfoContext from "../context/DecoInfoContext";

const PandaDecoOptions = ({ category, item, style, className}) => {
    const [currentCategory, setCurrentCategory] = useState(category);
    const [currentItem, setCurrentItem] = useState(item);
    const { decoInfo, setDecoInfo } = useContext(DecoInfoContext);
    // console.log(111, category, item);
    // console.log('2222',decoInfo);
    // setCurrentItem(decoInfo[currentCategory]);

    const handleClickCategory = (category) => {
        setCurrentCategory(category);
        // console.log(category, "CurrentItem:", currentItem, "->", decoInfo[category]);
        setCurrentItem(decoInfo[category]);        
        // console.log("here", category);
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
                    <DecoItemsByCategory category={currentCategory} item={currentItem} containerStyle={getScrollY()} onItemClick={handleClickItem}/>
                </div>
            </div>
        </div>

    );
}

export default PandaDecoOptions;