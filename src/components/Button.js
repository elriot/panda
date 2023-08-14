import classNames from "classnames";

export const Button = ({style, isRound=true, backgroundColor="red", borderColor="green", text ="", imageUrl =""}) =>{

    const classes = classNames(
        "border-radius-sm",
        isRound === true ? "rounded" : "",
    )
    const imageStyle ={
        width:'40px',
        height:'40px',
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

    return <div style={styles} className={classes}>
        {imageUrl && <img src={imageUrl} alt="Icon" style={imageStyle} />}{text}
    </div>;
}