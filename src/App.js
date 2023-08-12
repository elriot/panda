import './App.css';
import { getParam } from './data/util';
import { getLinks, getRandomImages } from './data/info';
import PandaDeco from './components/PandaDeco';


function App() {
  let share = getParam("share");
  if (share === null) share = "HA02BG02CH02";
  if(getParam("random") === "1")
    share = getRandomImages();

  const links = getLinks(share);
  console.log(links);
  // const hair_acc = share.indexOf("HA") !== -1 ? share.substring(share.indexOf("HA"), share.indexOf("HA") + 4) : null;
  // const bg = share.indexOf("BG") !== -1 ? share.substring(share.indexOf("BG"), share.indexOf("BG") + 4) : null;
  // const character = share.indexOf("CH") !== -1 ? share.substring(share.indexOf("CH"), share.indexOf("CH") + 4) : null
  // console.log(hair_acc, bg, character);
  // const bgLink = isValidImage(bg) ? "/images/bg/" + bg + ".jpg" : null;
  // const chLink = isValidImage(character) ? "/images/ch/" + character + ".png" : null;
  // const accLink = isValidImage(hair_acc) ? "/images/acc/ha_" + hair_acc + ".png" : null;

  return (
    <div className="vh-100 overflow-hidden">
      <div className="container h-100 d-flex flex-column" style={{ maxWidth: "700px" }}>

        <div id="1" className="fw-bold fs-3 bg-primary text-white text-center d-flex align-items-center justify-content-center" style={{ height: "10%" }}>
          My Panda
        </div>
        <div style={{ height: "65%" }}>
          <PandaDeco className="d-flex align-items-center justify-content-center position-relative" bgLink={links.bg} chLink={links.ch} haLink={links.ha} eaLink ={links.ea} /> {/* PandaDeco 컴포넌트 사용 */}
        </div>

        <div id="3" className="bg-light border" style={{ height: "25%" }}>
          Your content here.
        </div>

        <div id="4" className="bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ height: "5%" }}>
          &copy; 2023 My Mobile App
        </div>
      </div>
    </div>
  );




}

export default App;
