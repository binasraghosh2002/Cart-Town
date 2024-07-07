import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Cart Town App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4">
        <h4 className="bg-dark p-2 text-white text-center">ABOUT US</h4>
          <p className="text-justify mt-2">
         Founded with a passion for precision and style, Our Watches merges classic craftsmanship with contemporary design. Each timepiece is a testament to our commitment to quality, featuring meticulous detailing and Swiss-made movements. OurTime Watches is dedicated to delivering not just watches, but a timeless experience that celebrates tradition and innovation alike.
           </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
