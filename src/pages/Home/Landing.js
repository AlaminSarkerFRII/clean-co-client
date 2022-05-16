import React from "react";
import BucketGirl from "../../assets/image/bucketgirl.png";

const Landing = () => {
  return (
    <>
      <div className="hero h-screen lg:h-[60vh]  bg-accent mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <div>
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

      <div className="p-10 rounded-2xl shadow-lg mt-[-30px] w-5/6 mx-auto z-50 bg-neutral">
        <h2 className="text-primary text-2xl p-2.5">Get Features</h2>
        <div>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
