import React, { useEffect, useState } from 'react';
import { getAllCategoryInfo } from '../data/info';

const CategoryIcon = ({ onClick, containerStyle }) => {
    const [currentCategory, setCurrentCategory] = useState("01");
    const [categoryInfo, setCategoryInfo] = useState([]); // 초기 상태는 빈 배열 혹은 null 등으로 설정

    const handleIconClick = (iconNo) => {
        setCurrentCategory(iconNo);
        onClick(iconNo);
    }
    useEffect(() => {
        console.log('here');
        const info = getAllCategoryInfo();
        setCategoryInfo(info);
    }, []);

    const baseStyle = {
        height: '70px',
        width: '70px',
        borderStyle: 'solid',
        borderWidth: '0.3em',
        cursor: 'pointer'
    };

    const classes = "rounded vh-25 d-flex align-items-center justify-content-center";
    return (
        <div className={`row m-0 ${containerStyle ? containerStyle : ''}`}>
            {categoryInfo.map(category => (
                <div className="col" key={category.iconNo} onClick={() => handleIconClick(category.iconNo)}>
                    <div
                        style={{
                            ...baseStyle,
                            borderColor: currentCategory === category.iconNo ? 'rgba(255, 0, 255, 1.0)' : 'rgba(255, 0, 255, 0.1)'
                        }}
                        className={classes}>
                        <img
                            src={`/images/icons/${category.iconNo}.jpg`}
                            alt={category.name}
                            style={{ width: "100%", height: "100%", opacity: currentCategory === category.iconNo ? '100%' : '50%' }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CategoryIcon;