import './App.css';

function App() {
  const getParam = (paramName) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(paramName);
  }
  const bg = getParam("bg");
  const link = "/images/bg/" + bg + ".jpg";
  console.log(link);

  return (
        <div className="my-3 h-75 overflow-hidden">
          <img 
            src={link} 
            alt="bg" 
            className="mw-100 h-100 d-block mx-auto"
          />
        </div>
    // <div className="vh-100 overflow-hidden">
    //   <div className="container h-100">

    //     <header className="bg-primary text-white text-center p-3">
    //       <h1>My Mobile App</h1>
    //     </header>

    //     <section className="my-3 h-75 overflow-hidden">
    //       <h2>Welcome!</h2>
    //       <img 
    //         src={link} 
    //         alt="bg" 
    //         className="mw-100 h-100 d-block mx-auto"
    //       />
    //       <p>
    //         Welcome to our mobile app. Use the navigation below to explore.
    //       </p>
    //     </section>

    //     <footer className="bg-dark text-white text-center p-3 mt-3">
    //       &copy; 2023 My Mobile App
    //     </footer>
    //   </div>      
    // </div>
  );
}

export default App;
