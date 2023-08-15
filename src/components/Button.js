import classNames from "classnames";
import { getPublicURL } from "../data/util";

export const Button = ({ onClick, style, isRound = true, backgroundColor = "red", borderColor = "green", text = "", imageUrl = "" }) => {
    const handleClick = () => {
        onClick();
        // console.log("here");
    }

    const classes = classNames(
        "border-radius-sm",
        isRound === true ? "rounded" : "",
    )
    const imageStyle = {
        width: '1.5em',
        height: '1.5em',
        objectFit: 'cover'
    }
    const styles = {
        ...style,
        cursor: "pointer",
        borderColor,
        borderWidth: '0.15em',
        borderStyle: 'solid',
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center'
    };
    
    return <div style={styles} className={classes} onClick={handleClick}>
        {imageUrl && <img src={getPublicURL(imageUrl)} alt="Icon" style={imageStyle} />}
        {text &&
            <p style={{alignItems: 'center', justifyContent: 'center'}} className="m-0">
                {text}
            </p>}
    </div>;
}