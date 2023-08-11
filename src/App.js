import './App.css';

function App() {
  const getParam = (paramName) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(paramName);
  }
  let bg = getParam("bg");
  if (!bg) bg = "01";
  const bgLink = "/images/bg/" + bg + ".jpg";
  console.log(bgLink);

  return (
    <div className="vh-100 overflow-hidden">
      <div className="container h-100 d-flex flex-column" style={{ maxWidth: "700px" }}>

        <div id="1" className="fw-bold fs-3 bg-primary text-white text-center d-flex align-items-center justify-content-center" style={{ height: "10%" }}>
          My Panda
        </div>

        <div id="2" className="d-flex align-items-center justify-content-center position-relative"
          style={{
            width: "100%",
            height: "50%",
            backgroundImage: `url(${bgLink})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>

          <img
            src="/images/bg/03.png"
            alt="character"
            className="position-absolute"
            style={{ width: "100px", height: "100px", left: '70%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}
          />

          <img
            src="/images/bg/04.png"
            alt="clothes"
            className="position-absolute"
            style={{ width: "50%", height: "50%", left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}
          />
        </div>

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
