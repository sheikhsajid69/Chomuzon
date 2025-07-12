import React from 'react';

function Hh(props) {
  return (
    <div className="greeting-container" style={{color:'#fff'}}>
      <h1>Hello, world!{props.name}</h1>
      <p>Welcome to my React app!</p>
      <h5>My age is {props.age}</h5>
    </div>
  );

}
export default Hh;