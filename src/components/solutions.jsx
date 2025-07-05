import React from "react";
import HrrecruitmentImg from "../images/hrrecruitment.png";
import HrpayrollImg from "../images/hrpayroll.png";
import HroperationsImg from "../images/hroperations.png";

const tileData = [
    {
        header: "Strategic Recruitment",
        desc: "We design recruitment strategies tailored to your business needs, ensuring you attract and retain top talent.",
    },
    {
        header: "Payroll Setup",
        desc: "Comprehensive payroll setup and management solutions for seamless and compliant payroll processing.",
    },
    {
        header: "HR Audit",
        desc: "Thorough HR audits to identify gaps, ensure compliance, and optimize your HR processes.",
    },
    {
        header: "HR Strategy",
        desc: "Developing HR strategies aligned with your business goals for sustainable growth.",
    },
    {
        header: "Compliance",
        desc: "Stay updated and compliant with ever-changing labor laws and regulations.",
    },
    {
        header: "HR Tech",
        desc: "Implementing the latest HR technologies to streamline and automate your HR operations.",
    },
];

const Solutions = () => (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
        {/* Recruitment Section */}
        <section style={{ display: "flex", alignItems: "center", marginBottom: 48 }}>
            <div style={{ flex: 1, paddingRight: 24 }}>
                <img
                    src={HrrecruitmentImg}
                    alt="Recruitment"
                    style={{ width: "100%", borderRadius: 8 }}
                />
            </div>
            <div style={{ flex: 1 }}>
                <h2>Recruitment Strategy & Solution</h2>
                <p>
                    Our recruitment solutions are designed to help you find the right talent efficiently. We use proven strategies and modern tools to ensure your hiring process is effective and aligned with your business goals.
                </p>
            </div>
        </section>

        {/* Payroll Section */}
        <section style={{ display: "flex", alignItems: "center", marginBottom: 48 }}>
            <div style={{ flex: 1 }}>
                <h2>Payroll Support</h2>
                <p>
                    We provide end-to-end payroll support for companies, ensuring timely and accurate payroll processing, statutory compliance, and hassle-free management of employee compensation.
                </p>
            </div>
            <div style={{ flex: 1, paddingLeft: 24 }}>
                <img
                    src={HrpayrollImg}
                    alt="Payroll"
                    style={{ width: "100%", borderRadius: 8 }}
                />
            </div>
        </section>

        {/* HR Operations Section */}
        <section style={{ display: "flex", alignItems: "center", marginBottom: 48 }}>
            <div style={{ flex: 1, paddingRight: 24 }}>
                <img
                    src={HroperationsImg}
                    alt="HR Operations"
                    style={{ width: "100%", borderRadius: 8 }}
                />
            </div>
            <div style={{ flex: 1 }}>
                <h2>HR Operations</h2>
                <p>
                    Our team helps streamline your HR operations, from onboarding to exit management, ensuring smooth processes and enhanced employee experience.
                </p>
            </div>
        </section>

        {/* HR Strategic Solution Section */}
        <section>
            <h2 style={{ marginBottom: 24 }}>HR Strategic Solution</h2>
            <p style={{ marginBottom: 32 }}>
                We offer tailored HR solutions to address your unique business challenges. Explore our key offerings below:
            </p>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 24,
                }}
            >
                {tileData.map((tile, idx) => (
                    <div
                        key={tile.header}
                        style={{
                            background: "#f7f7f7",
                            borderRadius: 8,
                            padding: 24,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                            minHeight: 160,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                        }}
                    >
                        <h3 style={{ marginBottom: 12 }}>{tile.header}</h3>
                        <p style={{ color: "#555" }}>{tile.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export default Solutions;