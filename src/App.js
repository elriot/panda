import './App.css';
import { getParam } from './data/util';
import { getDecoInfoByString, getInitialInfo, initionDecoInfo } from './data/info';
import PandaRender from './components/PandaRender';
import { useEffect, useState } from 'react';
import PandaDecoOptions from './components/PandaDecoOptions';
import { DecoInfoProvider } from './context/DecoInfoContext';
import { getAllCategoryInfo } from './data/info';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { OpenedCategoryProvider } from './context/OpenedCategoryContext';
import { PandaInfoModal } from './components/PandaInfoModal';
import classNames from 'classnames';
import { getScrollY } from './data/getStyles';


function App() {
    const share = getParam("share");
    const userDecoInfo = typeof (share) === 'string' ? getDecoInfoByString(share) : share;
    const firstDecoInfo = share ? userDecoInfo : initionDecoInfo();
    // const getDecoInfoBy
    // console.log(share, userDecoInfo, firstDecoInfo);

    const [decoInfo, setDecoInfo] = useState(firstDecoInfo);
    const [categoryInfo, setCategoryInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);

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


    useEffect(() => {
        setCategoryInfo(getAllCategoryInfo());
    }, []);


    return (
        <OpenedCategoryProvider value={"bg"}>
            <DecoInfoProvider value={firstDecoInfo}>
                <div className={classNames("vh-100 overflow-hidden", getScrollY())}>
                    <div className="container-flex h-100 d-flex flex-column" style={{ maxWidth: "600px" }}>
                        {showModal && <PandaInfoModal onCloseClick={handleHideModal} />}
                        <Header style={{ flex: 0.8 }} onInfoClick={handleInfoClick} />
                        <PandaRender
                            style={{ flex: 6.3 }}
                            className="d-flex align-items-center justify-content-center position-relative"
                        />
                        <PandaDecoOptions
                            style={{ flex: 2.5 }}
                            category={category}
                            item={item}
                            className="bg-white border"
                        />
                        <Footer
                            style={{ flex: 0.4 }}
                            className="bg-dark text-white text-center d-flex align-items-center justify-content-center"
                        />
                    </div>
                </div>
            </DecoInfoProvider>
        </OpenedCategoryProvider>
    );
}

export default App;
