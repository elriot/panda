// import html2canvas from "html2canvas";
import { useDecoInfo } from "../context/DecoInfoContext";
import { getLinksByObject } from "../data/info";
import { getPublicURL } from "../data/util";

function PandaRender({ style, className, zoom, hue = 0 }) {
  const {decoInfo} = useDecoInfo()
  const links = getLinksByObject(decoInfo);
  const baseStyle = {
    position: 'absolute',
    left: '50%',
    bottom: '0%',
    transform: 'translateX(-50%)',
    width: zoom
  };

  return (    
    <div style={style} >
      <div id="render" className={className}
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${getPublicURL(links.bg)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}>

        {<img src={getPublicURL(links.ch)} alt="character" style={{ ...baseStyle, zIndex: 1 }} />}
        {links.ha && <img src={getPublicURL(links.ha)} alt="hair" style={{ ...baseStyle, zIndex: 5 }} />}
        {links.ea && <img src={getPublicURL(links.ea)} alt="eye" style={{ ...baseStyle, zIndex: 2 }} />}
        {links.ra && <img src={getPublicURL(links.ra)} alt="ear" style={{ ...baseStyle, zIndex: 3 }} />}
        {links.na && <img src={getPublicURL(links.na)} alt="neck" style={{ ...baseStyle, zIndex: 4 }} />}
      </div>
    </div>
    
  );
}

export default PandaRender;
