import { useContext, useEffect, useState } from "react";
import { getScrollX, getScrollY } from "../data/getStyles";
import DecoCategory from "./DecoCategory";
import DecoItemsByCategory from "./DecoItemsByCategory";
import { getAllCategoryInfo } from "../data/info";
import DecoInfoContext from "../context/DecoInfoContext";

const PandaDecoOptions = ({ initialCategory, style, className}) => {
    const [currentCategory, setCurrentCategory] = useState(initialCategory);
    const [currentItem, setCurrentItem] = useState("01");
    const { setDecoInfo } = useContext(DecoInfoContext);
    
    // useEffect(() => {
    //     // console.log("decoInfo has changed:", decoInfo);
    // }, []);

    const handleClickCategory = (category) => {
        setCurrentCategory(category);
    }
    const handleClickItem = (item) => {
        // console.log(item);
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
                    <DecoCategory category={currentCategory} onClick={handleClickCategory} containerStyle={getScrollX()} />
                </div>
                <div className="container" style={{height:"100%", overflowY: 'auto', backgroundColor:"white"}}>
                    <DecoItemsByCategory  category={currentCategory} containerStyle={getScrollY()} onItemClick={handleClickItem}/>
                </div>
            </div>
        </div>

    );
}

export default PandaDecoOptions;