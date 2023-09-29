import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout title={"Privacy Policy"}>
            <div className="row contactus " style={{ minHeight: "90vh" }}>
                <div className="col-md-6 ">
                    <img
                        src="/images/Privacypolicy.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p><h5>Privacy Policy:</h5>Welcome to our E-commerce website! We value your trust and are committed to protecting
                        your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your
                        personal information. By using our website, you agree to the terms of this policy.</p>
                    <p><h5>Information We Collect:</h5>We collect personal information such as name, email address, shipping address,
                        and payment details when you make a purchase. We may also collect non-personal information like IP addresses and
                        browsing history.</p>
                    <p><h5>Cookies and Tracking:</h5>We use cookies and similar technologies to enhance your browsing experience and
                        collect data for analytics. You can manage your cookie preferences through your browser settings.</p>
                    <p><h5>Third-Party Services:</h5>We may use third-party services for payment processing and analytics.
                        These services have their own privacy policies, and we encourage you to review them.</p>
                </div>
            </div>
        </Layout>
    );
};

export default Policy;
