import './App.css';
import { getParam } from './data/util';
import { getDecoInfoByString, getInitialCategory, getLinksByObject, getRandomImages, initionDecoInfo } from './data/info';
import PandaRender from './components/PandaRender';
import { useEffect, useState } from 'react';
import PandaDecoOptions from './components/PandaDecoOptions';
import DecoInfoContext from './context/DecoInfoContext';
import { getAllCategoryInfo } from './data/info';
import Header from './components/Header';
import { Footer } from './components/Footer';


function App() {
    const share = getParam("share") || getRandomImages();
    const userDecoInfo = typeof (share) === 'string' ? getDecoInfoByString(share) : share;
    const firstDecoInfo = share ? userDecoInfo : initionDecoInfo();
    // const getDecoInfoBy

    const [decoInfo, setDecoInfo] = useState(firstDecoInfo);
    const [categoryInfo, setCategoryInfo] = useState([]);

    useEffect(() => {
        setCategoryInfo(getAllCategoryInfo());
    }, []);


    const initialCategory = getInitialCategory(); //"01"

    return (
        <DecoInfoContext.Provider value={{ decoInfo, setDecoInfo }}>
            <div className="vh-100 overflow-hidden">
                <div className="container h-100 d-flex flex-column" style={{ maxWidth: "600px" }}>
                    <Header style={{  height: "10%" }} />
                    <PandaRender style={{  height: "55%" }} className="d-flex align-items-center justify-content-center position-relative" /> {/* PandaRender 컴포넌트 사용 */}
                    <PandaDecoOptions style={{ height: "35%", optionHeight:"10%", itemHeight:"25%" }} initialCategory={initialCategory} className="bg-light border" />
                    <Footer style={{  height: "5%" }} className="bg-dark text-white text-center d-flex align-items-center justify-content-center" />
                </div>
            </div>
        </DecoInfoContext.Provider>
    );
}

export default App;
