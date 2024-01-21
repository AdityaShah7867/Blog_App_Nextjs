import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-12">
        <div>
          <h2 className="text-center">About Us</h2>
          <p className="mt-8">
            Welcome to our blog! We are passionate about [your blog's topic or
            niche], and our goal is to share valuable insights and information
            with our readers.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            facilisis libero. Proin sit amet consectetur elit, et eleifend est.
          </p>
          <p>
            Thank you for visiting our blog and being a part of our community.
            If you have any questions or suggestions, feel free to{" "}
            <a href="/contact">contact us</a>.
          </p>
          <p className="mt-16">Created by:</p>
          <div className="flex justify-center items-center">
            <div>
            <img
              src="https://avatars.githubusercontent.com/u/121731399?s=96&v=4"
              style={{ width: '100%' }}
              alt=""
            />
            <p>ADITYA NIKUNJ SHAH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
