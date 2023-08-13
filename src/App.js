import './App.css';
import { getParam } from './data/util';
import { getInitialCategory, getLinks, getRandomImages, initionDecoInfo } from './data/info';
import PandaRender from './components/PandaRender';
import { useContext, useEffect, useState } from 'react';
import PandaDecoOptions from './components/PandaDecoOptions';
import DecoInfoContext from './context/DecoInfoContext';
import { getAllCategoryInfo } from './data/info';


function App() {
    const initialShare = getParam("share") || getRandomImages();

    // useState로 share 값을 관리합니다.
    const [decoInfo, setDecoInfo] = useState(initionDecoInfo());
    const [share, setShare] = useState(initialShare);
    const [categoryInfo, setCategoryInfo] = useState([]);

    useEffect(()=>{
        setCategoryInfo(getAllCategoryInfo());
    }, []);

    const links = getLinks(share, true, true);
    const initialCategory = getInitialCategory();
    
    return (
        <DecoInfoContext.Provider value={decoInfo}>
            <div className="vh-100 overflow-hidden">
                <div className="container h-100 d-flex flex-column" style={{ maxWidth: "600px" }}>

                    <div id="1" className="fw-bold fs-3 bg-primary text-white text-center d-flex align-items-center justify-content-center" style={{ height: "10%" }}>
                        My Panda
                    </div>
                    <div id="2" style={{ height: "60%" }}>
                        <PandaRender className="d-flex align-items-center justify-content-center position-relative" isNeck={true} bgLink={links.bg} chLink={links.ch} haLink={links.ha} eaLink={links.ea} naLink={links.na} raLink={links.ra} /> {/* PandaRender 컴포넌트 사용 */}
                    </div>

                    <div id="3" className="bg-light border" style={{ height: "30%" }}>
                        <PandaDecoOptions initialCategory={initialCategory}/>
                    </div>

                    <div id="4" className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ height: "5%" }}>
                        &copy; 2023 My Mobile App
                    </div>
                </div>
            </div>
        </DecoInfoContext.Provider>
    );
}

export default App;
