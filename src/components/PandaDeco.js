import { getScrollX } from "../data/bootstrapStyles";
import CategoryIcon from "./CategoryIcon";

const PandaDeco = () => {
    const handleClickCategory = (categoryNo) => {
        console.log("handleClickCategory", categoryNo);
    }

    return (
        <div>
            <div className="container ">
                <CategoryIcon onClick={handleClickCategory} containerStyle={getScrollX()} />
            </div>
        </div>
    );
}

export default PandaDeco;