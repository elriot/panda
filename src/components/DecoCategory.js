import React, {  useState } from 'react';
import { getAllCategoryInfo, getCategoryIconImageByNo } from '../data/info';
import { Icon } from './Icon';
import { useOpenedCategory } from '../context/OpenedCategoryContext';


const DecoCategory = ({ category, onClick, containerStyle, style} ) => {
    const categoryInfo = getAllCategoryInfo();
    const [currentCategory, setCurrentCategory] = useState(category);    

    const handleIconClick = (categoryCode) => {
        setCurrentCategory(categoryCode);
        onClick(categoryCode);
        
    }
    
    return (
        <div className={`row g-2 p-0 ${containerStyle ? containerStyle : ''}`} style={style}>
            {categoryInfo.map(info => (
                <div className="col" key={info.iconNo} onClick={() => handleIconClick(info.category)}>
                    {/* {console.log(category)} */}
                    <Icon
                        key={info.category}
                        isSelected={currentCategory === info.category}
                        iconNo={info.iconNo}
                        description={categoryInfo.name}
                        borderColor='#186781'
                        url={getCategoryIconImageByNo(info.iconNo)}                        
                    />                       
                </div>
            ))}
        </div>
    );
}

export default DecoCategory;