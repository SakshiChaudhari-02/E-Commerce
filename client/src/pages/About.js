import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={"About us - Ecommer app"}>
            <div className="row contactus " style={{ minHeight: "90vh" }}>
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        "Welcome to our E-commerce website , where passion meets purpose. At the heart of our digital
                        marketplace is a commitment to offering a curated selection of high-quality products. We strive
                        to redefine your online shopping experience by blending style, innovation, and convenience. Our
                        dedicated team works tirelessly to bring you a diverse range of offerings, ensuring that each
                        purchase reflects your unique taste and lifestyle. Join us on this journey of discovery and
                        satisfaction."
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;
