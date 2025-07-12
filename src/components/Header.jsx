import React from 'react';

const Header = () => {
    return (
        <header className="site-header">
            <nav>
                <h1>My React Application</h1>
                <h2>Learning Different HTML Tags</h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <section className="hero-section">
                <h3>Welcome to Our Website</h3>
                <p>This is a demonstration of various HTML tags in React</p>
                <button type="button" className="cta-button">Get Started</button>
            </section>
        </header>
    );
};

export default Header;