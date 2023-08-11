function PandaDeco({ className, bgLink, chLink, accLink }) {
  return (
    <div className={className}
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
    </div>
  );
}

export default PandaDeco;
