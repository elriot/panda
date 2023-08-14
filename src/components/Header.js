import { useContext } from "react";
import { Button } from "./Button";
import DecoInfoContext, { useDecoInfo } from "../context/DecoInfoContext";
import { getRandomImages } from "../data/info";

const Header = ({ style }) => {    
    const { decoInfo, setDecoInfo } = useDecoInfo();

    style = {...style, backgroundColor:'#57b9d8', zIndex : 999};
    const randomUrl = '/images/btn/random.png';
    const infoUrl = '/images/btn/info.png';

    const handleRandomClick = () => {
        const random = getRandomImages();
        console.log()
        setDecoInfo(prevState => ({ ...prevState, ...random}));
    }

    return (
        <div style={{ ...style, position: 'relative' }} className={"fw-bold fs-3 text-white text-center d-flex align-items-center justify-content-center"}>
            <div>My Panda</div>
            <div style={{ position: 'absolute', right: '10px', display: 'flex' }} >
                <Button backgroundColor="#fff107" borderColor="#df7676" imageUrl={randomUrl} onClick={handleRandomClick}/>
                <Button backgroundColor="#df7676" borderColor="#676767" style={{marginLeft:'0.1em'}} imageUrl={infoUrl}/>
            </div>
        </div>
    );
}

export default Header;
