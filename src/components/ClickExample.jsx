import React from "react";
function ClickExample() {
    function handleClick() {
        alert("Button clicked!");
    }
    return (
        <div>
            <h3>Event Handling in ReactJS</h3>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );

}
export default ClickExample;