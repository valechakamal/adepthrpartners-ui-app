import React from 'react';

const Footer = () => (
    <footer style={{
        width: '100%',
        padding: '1rem 0',
        background: '#f5f5f5',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#555',
        position: 'fixed',
        left: 0,
        bottom: 0
    }}>
        &copy; {new Date().getFullYear()} Adepthr Partners. All rights reserved.
    </footer>
);

export default Footer;