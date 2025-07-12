import React, {useRef} from "react";
function Uncontrolledinput(){
    const inputRef=useRef();
    function handleSubmit(){
        alert(`Text is: ${inputRef.current.value}`);
    }
    return(
        <>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleSubmit}>Submit</button>
        </>
    );

}
export default Uncontrolledinput;