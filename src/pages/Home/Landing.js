import React, { useEffect } from "react";
import BucketGirl from "../../assets/image/bucketgirl.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  // use AOS

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative">
      <div className="hero h-screen lg:h-[60vh] z-10 relative  bg-accent mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <div data-aos="fade-right" data-aos-easing="ease-in-sine">
            <p>Best Quality</p>
            <h1 className="text-5xl font-bold">
              Professional Cleaning Service
            </h1>
            <p className="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={BucketGirl} className="h-full" alt="" />
          </div>
        </div>
      </div>

      {/* input field */}

      <div className="p-10 rounded-2xl relative shadow-lg mt-[-30px] w-5/6 mx-auto z-20 bg-base-200">
        <h2 className="text-2xl mb-5">Get Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mt-5 ">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary mt-3">Get Started</button>
      </div>
    </div>
  );
};

export default Landing;
