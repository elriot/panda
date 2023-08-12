const PandaDeco = () => {
    const baseStyle = {
        height: '70px',
        width: '70px',
        borderColor: 'rgba(255, 0, 255, 0.1)',
        borderStyle: 'solid',
        borderWidth: '0.3em',
        backgroundColor: 'rgba(255, 0, 255, 0.2)',
        cursor: 'pointer'
    };
    // const height = {};
    const classes = "rounded vh-25 d-flex align-items-center justify-content-center";

    return (
        <div>
            <div className="container">
                <div className="row m-0 d-flex flex-nowrap overflow-auto"> {/*scroll x : d-flex ~ flow-auto*/}
                    <div className="col">
                        <div style={{ ...baseStyle }} className={classes}>
                            <img src="/images/icons/01.jpg" alt="Icon Description" style={{ width: "100%", height: "100%" }} />
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ ...baseStyle }} className={classes}>
                            <img src="/images/icons/02.jpg" alt="Icon Description" style={{ width: "100%", height: "100%" }} />
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ ...baseStyle }} className={classes}>
                            <img src="/images/icons/03.jpg" alt="Icon Description" style={{ width: "100%", height: "100%" }} />
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ ...baseStyle }} className={classes}>
                            <img src="/images/icons/04.jpg" alt="Icon Description" style={{ width: "100%", height: "100%" }} />
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ ...baseStyle }} className={classes}>
                            <img src="/images/icons/05.jpg" alt="Icon Description" style={{ width: "100%", height: "100%" }} />
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ ...baseStyle }} className={classes}>
                            <img src="/images/icons/06.jpg" alt="Icon Description" style={{ width: "100%", height: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PandaDeco;