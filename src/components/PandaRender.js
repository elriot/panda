function PandaRender({ className, bgLink, chLink, haLink, eaLink, naLink, raLink, isNeck }) {
  const baseStyle = {
    position: 'absolute',
    left: '50%',
    bottom: '0%',
    transform: 'translateX(-50%)',
    width: '100%'
  };
  return (
    <div className={className}
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bgLink})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
      
      {chLink && <img src={chLink} alt="character" style={{...baseStyle, zIndex: 1}} />}
      {haLink && <img src={haLink} alt="hair" style={{...baseStyle, zIndex: 2}} />}
      {eaLink && <img src={eaLink} alt="ear" style={{...baseStyle, zIndex: 3}} />}
      {isNeck && naLink && <img src={naLink} alt="neck" style={{...baseStyle, zIndex: 4}} />}
      {raLink && <img src={raLink} alt="ear" style={{...baseStyle, zIndex: 5}} />}
    </div>
  );
}

export default PandaRender;
