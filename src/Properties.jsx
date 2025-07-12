import React from 'react';
import'./components/Welcome';
import Welcome from './components/Welcome';
import './components/Properties';
function Properties(props) {
    const a='Sajid'
    const x=2025

    return (
       <>
       <h3>Welcome to Properties in react</h3>
       <p>Hey!!! {props.name} is developing thw site Bitches!!</p>
       <img src="C:\Users\sajid ms\Downloads\DALL·E 2025-03-21 09.08.43 - A hand-drawn, sketch-style reinterpretation of a gallery logo resembling a flower with overlapping petals. Each petal should be in a different color b.jpg" style={{width:"300px",height:"300px", border:"2px dotted pink"}}></img>
       </>
    );
}
export default Properties;