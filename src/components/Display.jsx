import React from 'react';
import Form from '../Form';

function Display({ name, age }) {
    return (
        <div className="display-data" style={{background:"#fff"}}>
            <h3>Form Data Display</h3>
            <p>Name: {name="sajid"}</p>
            <p>Age: {age="18"}</p>
            <Form />
        </div>
    );
}

export default Display;