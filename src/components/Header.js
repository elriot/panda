import { Button } from "./Button";
import {GiCardRandom} from "react-icons/gi";

const Header = ({ style }) => {    
    style = {...style, backgroundColor:'#57b9d8'};
    return (
        <div style={{ ...style, position: 'relative' }} className={"fw-bold fs-3 text-white text-center d-flex align-items-center justify-content-center"}>
            <div>My Panda</div>
            <div style={{ position: 'absolute', right: '10px', display: 'flex' }} >
                <Button backgroundColor="#8bc8dc" borderColor="#186f8b" imageUrl="images/none.png" />
                <Button backgroundColor="#8bc8dc" borderColor="#186f8b" style={{marginLeft:'0.1em'}} imageUrl="images/none.png"/>
            </div>
        </div>
    );
}


export default Header;