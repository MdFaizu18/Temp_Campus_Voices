import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {year} Mahendra Insitute of Technology</p>
            </div>
        </footer>
    );
};

export default Footer;
