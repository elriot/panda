function PandaDeco({ className, bgLink, chLink, haLink, eaLink, naLink, raLink, isNeck }) {
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
          alt="hair"
          className="position-absolute"
          style={{ width: "100%", height: "100%", left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}
        />
      }
      {eaLink &&
        <img
          src={eaLink}
          alt="ear"
          className="position-absolute"
          style={{ width: "100%", height: "100%", left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 3 }}
        />
      }
      {naLink && isNeck &&
        <img
          src={naLink}
          alt="neck"
          className="position-absolute"
          style={{ width: "100%", height: "100%", left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 4 }}
        />
      }
      {raLink &&
        <img
          src={raLink}
          alt="ear"
          className="position-absolute"
          style={{ width: "100%", height: "100%", left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 5 }}
        />
      }
    </div>
  );
}

export default PandaDeco;
