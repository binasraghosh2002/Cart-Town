import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.avif"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <h4 className="bg-dark p-2 text-white text-center">CONTACT US</h4>
          <p className="text-justify mt-2">
            Any queries about product,feel free to contact below. We are available 24x7.
            Thank You!
            
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;