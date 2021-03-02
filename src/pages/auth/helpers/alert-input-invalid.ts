const AlertInputInvalid = (errorMsg: string | undefined) => {
    console.log("ok");
    
    errorMsg === undefined? false : alert(errorMsg);
}

export default AlertInputInvalid