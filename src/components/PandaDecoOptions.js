import { getScrollX } from "../data/getStyles";
import DecoCategory from "./DecoCategory";
import PandaItems from "./PandaItems";

const PandaDecoOptions = () => {
    const handleClickCategory = (categoryNo) => {
        // console.log("handleClickCategory", categoryNo);
    }

    return (
        <div>
            <div className="container ">
                <DecoCategory onClick={handleClickCategory} containerStyle={getScrollX()}/>
            </div>
            <div className="container">
                <PandaItems>

                </PandaItems>
            </div>
        </div>
    );
}

export default PandaDecoOptions;