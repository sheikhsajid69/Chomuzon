import React, {useState} from "react";
 function Controlledinput(){
    const [text, setText]=useState("");
    function handleChange(event){
        setText(event.target.value);
    }
    return(
        <>
        <h1 style={{color:"#fff"}}>Controlled Components</h1>
        <input type="text" value={text} onChange={handleChange}></input>
        <p><b style={{color:"#fff"}}>My text is {text}</b></p>
        </>
    )

 }
 export default Controlledinput;