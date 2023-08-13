import { getScrollX } from "../data/getStyles";
import ItemCategory from "./ItemCategory";
import PandaItems from "./PandaItems";

const PandaDecoOptions = () => {
    const handleClickCategory = (categoryNo) => {
        // console.log("handleClickCategory", categoryNo);
    }

    return (
        <div>
            <div className="container ">
                <ItemCategory onClick={handleClickCategory} containerStyle={getScrollX()}/>
            </div>
            <div className="container">
                <PandaItems>

                </PandaItems>
            </div>
        </div>
    );
}

export default PandaDecoOptions;