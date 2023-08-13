import React, { useEffect, useState } from 'react';
import { getAllCategoryInfo } from '../data/info';
import { Icon } from './Icon';

const ItemCategory = ({ onClick, containerStyle }) => {
    const [currentCategory, setCurrentCategory] = useState("01");
    const [categoryInfo, setCategoryInfo] = useState([]); // 초기 상태는 빈 배열 혹은 null 등으로 설정

    const handleIconClick = (iconNo) => {
        setCurrentCategory(iconNo);
        onClick(iconNo);
    }
    useEffect(() => {
        const info = getAllCategoryInfo();
        setCategoryInfo(info);
    }, []);

    return (
        <div className={`row m-0 ${containerStyle ? containerStyle : ''}`}>
            {categoryInfo.map(category => (
                <div className="col" key={category.iconNo} onClick={() => handleIconClick(category.iconNo)}>
                    {/* {console.log(category)} */}
                    <Icon
                        isSelected={currentCategory === category.iconNo}
                        iconNo={category.iconNo}
                        description={categoryInfo.name}
                        borderColor='rgba(255, 0, 255, 1.0)'
                        url={`/images/icons/${category.iconNo}.jpg`}
                    />                       
                </div>
            ))}
        </div>
    );
}

export default ItemCategory;