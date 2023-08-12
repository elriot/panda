function PandaDeco({ className, bgLink, chLink, haLink, eaLink }) {
  return (
    <div className={className}
      style={{
        width: "100%",
        height: "100%",
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
      {haLink &&
        <img
          src={haLink}
          alt="clothes"
          className="position-absolute"
          style={{ width: "100%", height: "100%", left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}
        />
      }
      {eaLink &&
        <img
          src={eaLink}
          alt="clothes"
          className="position-absolute"
          style={{ width: "100%", height: "100%", left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 3 }}
        />
      }
    </div>
  );
}

export default PandaDeco;
