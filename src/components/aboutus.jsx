import React from 'react';

// Example statistics data
const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Clients', value: '150+' },
    { label: 'Projects Delivered', value: '200+' },
    { label: 'Team Members', value: '50+' },
];

const sectionStyle = {
    backgroundColor: '#e6f2fb', // Match header.jsx light blue
    padding: '48px 0',
};

const containerStyle = {
    display: 'flex',
    maxWidth: '1100px',
    margin: '0 auto',
    gap: '48px',
    alignItems: 'center',
    flexWrap: 'wrap',
};

const leftStyle = {
    flex: 1,
    minWidth: '280px',
};

const rightStyle = {
    flex: 1,
    minWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
};

const statBoxStyle = {
    background: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    textAlign: 'center',
};

const AboutUs = () => (
    <section style={sectionStyle}>
        <div style={containerStyle}>
            <div style={leftStyle}>
                <h2>About Our Company</h2>
                <p>
                    Adept HR Partners is a leading provider of human resource solutions, dedicated to helping businesses grow and succeed. 
                    With a decade of experience, we deliver tailored HR services to a diverse clientele, ensuring excellence and innovation in every project.
                </p>
            </div>
            <div style={rightStyle}>
                {stats.map((stat) => (
                    <div key={stat.label} style={statBoxStyle}>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1976d2' }}>{stat.value}</div>
                        <div style={{ color: '#555', marginTop: '8px' }}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default AboutUs;