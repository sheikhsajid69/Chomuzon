import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subscription: 'basic',
        interests: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const interests = [...formData.interests];
            if (checked) {
                interests.push(value);
            } else {
                const index = interests.indexOf(value);
                if (index > -1) interests.splice(index, 1);
            }
            setFormData(prev => ({ ...prev, interests }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="form-container">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Subscription Type:</label>
                    <select
                        name="subscription"
                        value={formData.subscription}
                        onChange={handleChange}
                    >
                        <option value="basic">Basic</option>
                        <option value="premium">Premium</option>
                        <option value="pro">Pro</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Interests:</label>
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="interests"
                                value="technology"
                                checked={formData.interests.includes('technology')}
                                onChange={handleChange}
                            />
                            Technology
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="interests"
                                value="design"
                                checked={formData.interests.includes('design')}
                                onChange={handleChange}
                            />
                            Design
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="interests"
                                value="business"
                                checked={formData.interests.includes('business')}
                                onChange={handleChange}
                            />
                            Business
                        </label>
                    </div>
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Form;