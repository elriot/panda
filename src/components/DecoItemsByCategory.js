import { getItemsByCatogory } from "../data/info";
import { Icon } from "./Icon";

const DecoItemsByCategory = ({category, containerStyle, onItemClick, item, style}) => {    
    const items = getItemsByCatogory(category);
    const handleItemClick = (itemNo) => {
        onItemClick(itemNo);
    }
    // console.log("decoItemByCategory", category, item);
    // row-cols-auto : for mobile
    // row-cols-sm-6: for pc browser
    return (
        <div className={` row g-2 p-0 row-cols-auto row-cols-sm-6 ${containerStyle ? containerStyle : ''}  flex-fill`}
        style={{ ...style, overflowY: 'auto', display: 'flex' }}>        
            {items.map(info => (
                <div  style={{...style,}} key={info.itemNo} className="" onClick={() => handleItemClick(info.itemNo)}>
                    <Icon                        
                        isSelected={item === info.itemNo}
                        iconNo={info.iconNo}
                        description={info.itemNo}
                        borderColor='#b8535d'
                        url={info.path}
                        backgroundColor=''
                    />                       
                </div>
            ))}
        </div>
    );
}

export default DecoItemsByCategory; 