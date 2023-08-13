import { useContext } from "react";
import DecoInfoContext from "../context/DecoInfoContext";
import { getLinksByObject } from "../data/info";

function PandaRender({ style, className, hue = 0 }) {
  const {decoInfo} = useContext(DecoInfoContext);
  const links = getLinksByObject(decoInfo);
  const baseStyle = {
    position: 'absolute',
    left: '50%',
    bottom: '0%',
    transform: 'translateX(-50%)',
    width: '100%'
  };
  return (
    <div style={style}>
      <div className={className}
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${links.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}>

        {<img src={links.ch} alt="character" style={{ ...baseStyle, zIndex: 1 }} />}
        {links.ha && <img src={links.ha} alt="hair" style={{ ...baseStyle, zIndex: 2 }} />}
        {links.ea && <img src={links.ea} alt="eye" style={{ ...baseStyle, zIndex: 3 }} />}
        {links.ra && <img src={links.ra} alt="ear" style={{ ...baseStyle, zIndex: 5 }} />}
        {links.na && <img src={links.na} alt="neck" style={{ ...baseStyle, zIndex: 4 }} />}
      </div>
    </div>
  );
}

export default PandaRender;
