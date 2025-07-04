import React from "react";

const Home = () => {
    return (
        <section style={{ display: "flex", minHeight: "100vh", alignItems: "center", padding: "2rem" }}>
            {/* Left Section */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem" }}>
                {/* Row 1: Header */}
                <div>
                    <h1>Welcome to Adept HR Partners</h1>
                </div>
                {/* Row 2: Description */}
                <div>
                    <p>
                        We help you find the best HR solutions for your business. Join us to streamline your HR processes and grow your team efficiently.
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
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                {/* Placeholder Images */}
                <div style={{ width: "200px", height: "120px", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>Image 1</div>
                <div style={{ width: "200px", height: "120px", background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>Image 2</div>
                <div style={{ width: "200px", height: "120px", background: "#ccc", display: "flex", alignItems: "center", justifyContent: "center" }}>Image 3</div>
            </div>
        </section>
    );
};

export default Home;