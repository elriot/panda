import { useState } from "react";
import { getScrollX, getScrollY } from "../data/getStyles";
import DecoCategory from "./DecoCategory";
import DecoItemsByCategory from "./DecoItemsByCategory";
import { getAllCategoryInfo } from "../data/info";

const PandaDecoOptions = ({ initialCategory }) => {
    const categoryInfo = getAllCategoryInfo();
    const [currentCategory, setCurrentCategory] = useState(initialCategory);

    const handleClickCategory = (category) => {
        setCurrentCategory(category);
    }
    console.log(currentCategory)

    return (
        
        <div style={{height:"100%" }}>
            <div className="container" style={{backgroundColor : 'rgba(0,0,0,0.05)'}}>
                <DecoCategory category={currentCategory} onClick={handleClickCategory} containerStyle={getScrollX()} />
            </div>
            <div className="container" style={{height:"100%", overflowY: 'auto', backgroundColor:"white"}}>
                <DecoItemsByCategory category={currentCategory} containerStyle={getScrollY()} />
            </div>
        </div>

    );
}

export default PandaDecoOptions;