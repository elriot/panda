import { Button } from "./Button";
import { useDecoInfo } from "../context/DecoInfoContext";
import { getRandomImages, initionDecoInfo } from "../data/info";
import { getPublicURL } from "../data/util";

const Header = ({ style, onInfoClick, onZoomClick, zoomIdx = 1 }) => {
    const { setDecoInfo } = useDecoInfo();

    style = { ...style, backgroundColor: '#57b9d8', zIndex: 999 };
    const randomUrl = '/images/btn/random.png';
    const infoUrl = '/images/btn/info.png';
    const resetUrl = '/images/btn/reset.png';
    const zoomUrl = '/images/btn/zoom'+zoomIdx+'.png';
    
    const handleRandomClick = () => {
        const random = getRandomImages();  
        setDecoInfo(prevState=> ({...prevState, ...random}));     
    }
    const handleInfoClick = () => {
        onInfoClick();
    }
    const handleResetClick = () => {
        const initionDeco = initionDecoInfo();
        // console.log(initionDeco);
        setDecoInfo(prevState=> ({...prevState, ...initionDeco}));  
    }
    const handleZoomClick = () => {
        // console.log("Hrere")
        onZoomClick();
    }
    
    return (
        <div style={{ ...style, position: 'relative' }} className={"fw-bold fs-3 text-white text-center d-flex align-items-center justify-content-center"}>
            <div>My Panda</div>
            <div style={{ position: 'absolute', left: '10px', display: 'flex' }} >
                <Button
                    backgroundColor="#df7676"
                    borderColor="#676767"                    
                    imageUrl={getPublicURL(infoUrl)}
                    onClick={handleInfoClick}
                />
                <Button
                    backgroundColor="#fff107"
                    borderColor="#df7676"
                    style={{ marginLeft: '0.2em' }}
                    imageUrl={getPublicURL(zoomUrl)}
                    onClick={handleZoomClick}
                />                
            </div> 
            <div style={{ position: 'absolute', right: '10px', display: 'flex' }} >
                <Button
                    backgroundColor="#ffa600"
                    borderColor="#df7676"
                    imageUrl={getPublicURL(randomUrl)}
                    onClick={handleRandomClick}
                />
                <Button
                    backgroundColor="#76dfcd"
                    borderColor="#347688"
                    style={{ marginLeft: '0.2em' }}
                    imageUrl={getPublicURL(resetUrl)}
                    onClick={handleResetClick}
                />                
            </div>                    
        </div>
    );
}

export default Header;
