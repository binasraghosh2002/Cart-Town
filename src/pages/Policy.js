import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.avif"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h4 className="bg-dark p-2 text-white text-center">PRIVACY AND POLICY</h4>
          <p>Here are key components typically included in a Privacy Policy:</p>
          <p>Information We Collect:We may collect personal information, such as your name, email address, shipping address, and payment details, when you place an order or create an account with us.</p>
          <p>Security of Your Information:We take appropriate measures to protect your personal information from unauthorized access, alteration, or disclosure. </p>
          <p>Contact Us:If you have any questions or concerns about our Privacy Policy, please contact us</p>
          <p></p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;