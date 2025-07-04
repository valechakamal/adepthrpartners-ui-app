import React, { useState } from "react";

const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission (e.g., send to API)
        setSubmitted(true);
    };

    return (
        <div style={{
            maxWidth: 500,
            margin: "40px auto",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            padding: 32,
            fontFamily: "Segoe UI, Arial, sans-serif"
        }}>
            <h2 style={{ color: "#1a237e", marginBottom: 24, textAlign: "center" }}>
                Contact Us
            </h2>
            {submitted ? (
                <div style={{ color: "#388e3c", textAlign: "center", fontWeight: 500 }}>
                    Thank you for reaching out! We'll get back to you soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 18 }}>
                        <label style={{ display: "block", marginBottom: 6, color: "#333" }}>
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "10px 12px",
                                border: "1px solid #bdbdbd",
                                borderRadius: 6,
                                fontSize: 16,
                                outline: "none",
                                transition: "border 0.2s"
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 18 }}>
                        <label style={{ display: "block", marginBottom: 6, color: "#333" }}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "10px 12px",
                                border: "1px solid #bdbdbd",
                                borderRadius: 6,
                                fontSize: 16,
                                outline: "none",
                                transition: "border 0.2s"
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 24 }}>
                        <label style={{ display: "block", marginBottom: 6, color: "#333" }}>
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            style={{
                                width: "100%",
                                padding: "10px 12px",
                                border: "1px solid #bdbdbd",
                                borderRadius: 6,
                                fontSize: 16,
                                resize: "vertical",
                                outline: "none",
                                transition: "border 0.2s"
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            background: "linear-gradient(90deg, #1a237e 0%, #3949ab 100%)",
                            color: "#fff",
                            padding: "12px 0",
                            border: "none",
                            borderRadius: 6,
                            fontSize: 18,
                            fontWeight: 600,
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(26,35,126,0.08)"
                        }}
                    >
                        Send Message
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactUs;