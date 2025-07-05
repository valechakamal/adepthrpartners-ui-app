import React from "react";
import hrPartnershipImg from "../images/hrpartnership.png";

const Home = () => {
    return (
        <section style={{ display: "flex", minHeight: "100vh", alignItems: "center", padding: "2rem" }}>
            {/* Left Section */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem",paddingRight: 24 }}>
                {/* Row 1: Header */}
                <div>
                    <h1>Welcome to Adept HR Partners.

                    </h1>
                    <h4>
                        Your Strategic Partner for HR Excellence.</h4>
                </div>
                {/* Row 2: Description */}
                <div>
                    <p>
                        We deliver comprehensive HR solutions tailored to your business needs. Recruitment, operations, and payroll expertise for optimal performance and growth. Join us to streamline your HR processes and grow your team efficiently.
                    </p>
                    <p>
                        Contact us today to discover how our expert HR solutions can drive your business forward effectively. 
                    </p>
                </div>
                {/* Row 3: Email Input and Button */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        style={{ padding: "0.5rem", flex: 1, borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                    <button style={{ padding: "0.5rem 1.5rem", borderRadius: "4px", border: "none", background: "#007bff", color: "#fff", cursor: "pointer" }}>
                        Get Started
                    </button>
                </div>
            </div>
            {/* Right Section */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem", overflow: "hidden" }}>
                <img
                    src={hrPartnershipImg}
                    alt="HR Solutions"
                    style={{ maxWidth: "100%", height: "auto", borderRadius: 8, display: "block", objectFit: "contain" }}
                />
            </div>
        </section>
    );
};

export default Home;