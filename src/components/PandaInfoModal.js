import { useDecoInfo } from "../context/DecoInfoContext";
import { getPandaInfoByNo } from "../data/info";
import { getPublicURL } from "../data/util";
import { Button } from "./Button";

export const PandaInfoModal = ({ modalRef, onCloseClick }) => {
    const { decoInfo } = useDecoInfo();
    const pandaInfo = getPandaInfoByNo(decoInfo["ch"]);
    // console.log(pandaInfo);

    const handleClickCloseButton = () => {
        onCloseClick();
    }
    
    return (
        <div className="modal-container">
            <div className="modal-content" ref={modalRef}>
                <Button
                    style={{ position: 'absolute', top: '0.5em', right: '0.5em', }}
                    imageUrl={getPublicURL("/images/close.png")}
                    backgroundColor="#cccccc"
                    borderColor="#575757"
                    onClick={handleClickCloseButton}
                />
                <div className="container mt-3 text-center fs-4">
                    <div className="row mb-2">
                        <img src={getPublicURL(pandaInfo.image)} className="mx-auto d-block" alt="profilephoto"
                        style={{ width: "70%", backgroundColor: pandaInfo["color"] }}/>                    
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <span className="fw-bold fs-2">{pandaInfo.name}</span> <span>({pandaInfo.gender})</span>
                        </div>                  
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            - Birth Date : {pandaInfo.birth}
                        </div>                  
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            - Current Address :<br/> {pandaInfo.address}
                        </div>                  
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            - Photo by : <a href={pandaInfo.link} target="_blank" rel="noreferrer"><br/>{pandaInfo.photo}</a>
                        </div>                  
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <Button text={"close"}
                                className="mx-auto"
                                backgroundColor="#cccccc"
                                borderColor="#575757"
                                onClick={handleClickCloseButton}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
