import React from "react";

const About = () => {
  return (
    <div className="bg-pink-100 text-gray-800 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-8">
        
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/images/d.jpg"
            alt="Delicious food"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col justify-start">
          <h1 className="text-4xl font-bold text-orange-500 mb-6">Welcome Users</h1>
          <p className="text-lg mb-4">
            Welcome to our platform, dear Users! We are dedicated to providing you with the best digital experience possible. 
            From easy navigation to useful features, everything is designed with you in mind.
          </p>
          <p className="text-lg mb-4">
            Our goal is to make your interaction seamless, efficient, and enjoyable. Every update, feature, and improvement is made to ensure 
            that you can find what you need quickly and effortlessly.
          </p>
          <p className="text-lg mb-4">
            We value your feedback and continuously strive to improve based on your suggestions. Your experience matters most, 
            and we are committed to building a platform that truly serves your needs.
          </p>
          <p className="text-lg">
            Join us on this journey and explore all the possibilities we offer. Stay connected, stay informed, and make the most 
            of the platform designed especially for you. Welcome aboard, Users!
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
