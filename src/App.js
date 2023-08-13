import './App.css';
import { getParam } from './data/util';
import { getLinks, getRandomImages } from './data/info';
import PandaRender from './components/PandaRender';
import { useEffect, useState } from 'react';
import PandaDeco from './components/PandaDeco';
import { getScrollX } from './data/bootstrapStyles';


function App() {
  const initialShare = getParam("share") || getRandomImages();
  
  // useState로 share 값을 관리합니다.
  const [share, setShare] = useState(initialShare);
  
  // 1초마다 랜덤 이미지를 갱신합니다.
  // useEffect(() => {
  //   if (getParam("random") === "1") {
  //     const intervalId = setInterval(() => {
  //       setShare(getRandomImages());
  //     }, 1000);

  //     // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
  //     return () => clearInterval(intervalId);
  //   }
  // }, []); // 빈 dependency 배열은 컴포넌트가 처음 마운트될 때만 useEffect 내부의 코드를 실행합니다.

  const links = getLinks(share, true, true);
  // console.log(links)
  // console.log(links);
  // console.log(kli)
  // let share = getParam("share");
  // if (share === null) share = "HA02BG02CH02";
  // if(getParam("random") === "1")
  //   share = getRandomImages();

  // const links = getLinks(share);
  return (
    <div className="vh-100 overflow-hidden">
      <div className="container h-100 d-flex flex-column" style={{ maxWidth: "600px" }}>

        <div id="1" className="fw-bold fs-3 bg-primary text-white text-center d-flex align-items-center justify-content-center" style={{ height: "10%" }}>
          My Panda
        </div>
        <div id="2" style={{ height: "60%" }}>
          <PandaRender className="d-flex align-items-center justify-content-center position-relative" isNeck={true} bgLink={links.bg} chLink={links.ch} haLink={links.ha} eaLink ={links.ea} naLink={links.na} raLink={links.ra}/> {/* PandaRender 컴포넌트 사용 */}
        </div>

        <div id="3" className="bg-light border" style={{ height: "30%" }}>
          <PandaDeco/>
        </div>

        <div id="4" className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ height: "5%" }}>
          &copy; 2023 My Mobile App
        </div>
      </div>
    </div>
  );
// return (
//   <div className="container" style={{ maxWidth: "700px" }}>
//       <div id="1" className="bg-primary text-white text-center d-flex align-items-center justify-content-center vh-10 vh-lg-5">
//           My Panda
//       </div>

//       <div id="2" className="d-flex align-items-center justify-content-center vh-65 vh-lg-75">
//           <PandaRender bgLink={links.bg} chLink={links.ch} haLink={links.ha} eaLink={links.ea} naLink={links.na} raLink={links.ra} />
//       </div>

//       <div id="3" className="bg-light border vh-25 vh-lg-15">
//           Your content here.
//       </div>

//       <div id="4" className="bg-dark text-white text-center d-flex align-items-center justify-content-center vh-5">
//           &copy; 2023 My Mobile App
//       </div>
//   </div>
// );
}

export default App;
