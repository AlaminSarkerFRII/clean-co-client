import React from "react";
import BucketGirl from "../../assets/image/bucketgirl.png";

const Landing = () => {
  return (
    <div className="hero h-[60vh] bg-base-200 bg-accent mt-16">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <p>Best Quality</p>
          <h1 className="text-5xl font-bold">Professional Cleaning Service</h1>
          <p className="py-6 max-w-xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img src={BucketGirl} className="max-w-sm rounded-lg h-full" alt="" />
      </div>
    </div>
  );
};

export default Landing;
