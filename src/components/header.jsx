import React from "react";
import logo from "../images/logo-chatgptCopy.png";

const headerStyle = {
    background: "#e3f0fc",
    padding: "20px 0",
    fontFamily: "Segoe UI, Arial, sans-serif",
    borderBottom: "1px solid #c2d6ee"
};

const topRowStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0 40px"
};

const logoStyle = {
    height: "80px",
    marginRight: "32px"
};

const companyNameStyle = {
    fontSize: "1.7rem",
    fontWeight: 600,
    color: "#1a355e"
};

const navRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 40px",
    marginTop: "0.5px"
};

const navMenuStyle = {
    display: "flex",
    gap: "32px",
    marginRight: "24px"
};

const navLinkStyle = {
    textDecoration: "none",
    color: "#1a355e",
    fontWeight: 500,
    fontSize: "1rem"
};

const Header = () => (
    <header style={headerStyle}>
        <div style={topRowStyle}>
            <img src={logo} alt="Logo" style={logoStyle} />
            <span style={companyNameStyle}>Adept HR Partners</span>
        </div>
        <div style={navRowStyle}>
            <nav style={navMenuStyle}>
                <a href="#home" style={navLinkStyle}>Home</a>
                <a href="#aboutus" style={navLinkStyle}>About us</a>
                <a href="#solutions" style={navLinkStyle}>Solution</a>
                <a href="#services" style={navLinkStyle}>Services</a>
                <a href="#contact" style={navLinkStyle}>Contact</a>
            </nav>
        </div>
    </header>
);

export default Header;
