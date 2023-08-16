import './App.css';
import { getParam } from './data/util';
import { getDecoInfoByString, getInitialInfo, getZoomInfo, initionDecoInfo } from './data/info';
import PandaRender from './components/PandaRender';
import { useRef, useState } from 'react';
import PandaDecoOptions from './components/PandaDecoOptions';
import { DecoInfoProvider } from './context/DecoInfoContext';
import { getAllCategoryInfo } from './data/info';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { OpenedCategoryProvider } from './context/OpenedCategoryContext';
import { PandaInfoModal } from './components/PandaInfoModal';
import classNames from 'classnames';
import html2canvas from 'html2canvas';

function App() {
    const share = getParam("share");
    const userDecoInfo = typeof (share) === 'string' ? getDecoInfoByString(share) : share;
    const firstDecoInfo = share ? userDecoInfo : initionDecoInfo();

    const decoInfo = firstDecoInfo;
    const categoryInfo = getAllCategoryInfo();
    const [showModal, setShowModal] = useState(false);  
    const zoomInfo = getZoomInfo();
    const [zoomIdx, setZoomIdx] = useState(zoomInfo.startIdx);
    

    // category, item for app first visit or refresh or redirect
    const info = getInitialInfo();
    const category = info["category"];
    const item = decoInfo[category];
    const handleInfoClick = () => {
        setShowModal(true);
    }
    const handleHideModal = () => {
        setShowModal(false);
    }
    const handleZoomClick = () => {
        const nextIdx = zoomIdx+1 >= zoomInfo.maxIdx ? zoomInfo.minIdx : zoomIdx+1;
        setZoomIdx(nextIdx);
    }

    const handleDownloadClick = () => {
        const el = document.getElementById('render'); 
        html2canvas(el,{}).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'captured-image.png';
            link.click();
        });
    }


    return (
        <OpenedCategoryProvider value={"bg"}>
            <DecoInfoProvider value={firstDecoInfo}>
                <div className={classNames("vh-100")}>
                    <div className={classNames("container-flex h-100 d-flex flex-column")} 
                        style={{ position: 'relative', 
                            top: '50%', 
                            left: '50%', 
                            transform: 'translate(-50%, -50%)',
                            maxWidth: '600px'}}> 
                        {showModal && <PandaInfoModal onCloseClick={handleHideModal}/>}
                        <Header style={{ flex: 0.8 }} onInfoClick={handleInfoClick} onZoomClick={handleZoomClick}/>                        
                        <PandaRender
                            style={{ flex: 6.0 }}
                            zoom={zoomInfo[zoomIdx].width}
                            className={classNames("d-flex align-items-center justify-content-center position-relative")}
                        />                        
                        <button onClick={handleDownloadClick}
                            style={{ border: 'none', zIndex: 2, flex: 0.4, background: '#5f9ea0' }}
                            className='fw-bold fs-4'>
                                Save Image
                        </button>
                        <PandaDecoOptions
                            style={{ flex: 2.9 }}
                            category={category}
                            item={item}
                            className={classNames("bg-white border align-items-center justify-content-center position-relative",/* getScrollY()*/)}
                            // className="bg-white border"
                        />                        
                        <Footer
                            style={{ flex: 0.3 }}
                            className="bg-dark text-white text-center d-flex align-items-center justify-content-center"
                        />
                    </div>
                </div>
            </DecoInfoProvider>
        </OpenedCategoryProvider>
    );
}

export default App;
