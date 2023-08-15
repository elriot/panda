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
        <div className={` row g-2 p-0 mt-3 row-cols-auto row-cols-sm-6 ${containerStyle ? containerStyle : ''}  flex-fill`}
            style={{...style,  height: '18vh', overflowY: 'auto' }}>
            {items.map(info => (
                <div key={info.itemNo} className="col mt-0" onClick={() => handleItemClick(info.itemNo)}>
                    {/* {console.log(category)} */}
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