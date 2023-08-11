import './App.css';
import { getParam } from './data/util';
import { IMAGE_INFO, isValidImage } from './data/info';
import PandaDeco from './components/PandaDeco';



function App() {
  let share = getParam("share");
  if (share === null) share = "A02B02C02";

  const acc = share.indexOf("A") !== -1 ? share.substring(share.indexOf("A"), share.indexOf("A") + 3) : null;
  const bg = share.indexOf("B") !== -1 ? share.substring(share.indexOf("B"), share.indexOf("B") + 3) : null;
  const character = share.indexOf("C") !== -1 ? share.substring(share.indexOf("C"), share.indexOf("C") + 3) : null

  const bgLink = isValidImage(bg) ? "/images/" + bg + ".jpg" : null;
  const chLink = isValidImage(character) ? "/images/" + character + ".png" : null;
  const accLink = isValidImage(acc) ? "/images/" + acc + ".png" : null;
  console.log(bgLink, chLink, accLink);

  return (
    <div className="vh-100 overflow-hidden">
      <div className="container h-100 d-flex flex-column" style={{ maxWidth: "700px" }}>

        <div id="1" className="fw-bold fs-3 bg-primary text-white text-center d-flex align-items-center justify-content-center" style={{ height: "10%" }}>
          My Panda
        </div>

        <PandaDeco className="d-flex align-items-center justify-content-center position-relative" bgLink={bgLink} chLink={chLink} accLink={accLink} /> {/* PandaDeco 컴포넌트 사용 */}
        {/* <div id="2" className=
          style={{
            width: "100%",
            height: "50%",
            backgroundImage: `url(${bgLink})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>

          {chLink &&
            <img
              src={chLink}
              alt="character"
              className="position-absolute"
              style={{ width: "100%", height: "100%", left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}
            />}
          {accLink &&
            <img
              src={accLink}
              alt="clothes"
              className="position-absolute"
              style={{ width: "100%", height: "100%", left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}
            />
          }
        </div> */}

        <div id="3" className="bg-light border" style={{ height: "35%" }}>
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
