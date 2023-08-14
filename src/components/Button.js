import classNames from "classnames";

export const Button = ({onClick, style, isRound=true, backgroundColor="red", borderColor="green", text ="", imageUrl =""}) =>{
    const handleClick = () => {
        onClick();
        // console.log("here");
    }

    const classes = classNames(
        "border-radius-sm",
        isRound === true ? "rounded" : "",
    )
    const imageStyle ={
        width:'1.5em',
        height:'1.5em',
        objectFit:'cover'
    }
    const styles = {
        ...style, 
        cursor:"pointer", 
        borderColor, 
        borderWidth: '2px',  
        borderStyle: 'solid', 
        backgroundColor,
        alignItems: 'center', 
        justifyContent: 'center'
    };   

    return <div style={styles} className={classes} onClick={handleClick}>
        {imageUrl && <img src={imageUrl} alt="Icon" style={imageStyle} />}{text}
    </div>;
}