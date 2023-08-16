import { getPublicURL } from "../data/util";

export const Footer = ({style, className}) => {
    return (
        <div style={style} className={className}>
            Enjoy! Created by @borderless_panda &nbsp; 
            <a href="https://www.instagram.com/borderless_panda/" target="blank">
                <img src={getPublicURL("/images/instagram.png")} alt="instagra"/>
            </a>
        </div>
    );

}