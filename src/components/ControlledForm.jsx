import React, { useState } from 'react';
import Display from './Display';

function ControlledForm() {
    const [formData, setFormData] = useState({
        name: '',
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.age) {
            alert('Please fill in all fields');
            return;
        }
        if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
            alert('Please enter a valid age');
            return;
        }
    };

    return (
        <div className="controlled-form">
            <h2>Controlled Form with Props</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter your age"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <Display name={formData.name} age={formData.age} />
        </div>
    );
}

export default ControlledForm;