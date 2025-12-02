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
          <h1 className="text-4xl font-bold text-orange-500 mb-6">Welcome Food</h1>
          <p className="text-lg mb-4">
            Welcome to Food, India’s largest home-grown burger, pizza, snacks, and drinks chain. 
            Our journey began with a simple mission: to bring the authentic taste of India to every bite.
            We specialize in creating delicious fusion burgers, mouth-watering pizzas, and refreshing drinks 
            that cater to the Indian palate. Each item on our menu is thoughtfully curated to combine quality ingredients 
            with unique flavors that will leave you craving for more.
          </p>
          <p className="text-lg mb-4">
            At Food, we believe in providing not just food, but an experience. Our team works tirelessly 
            to innovate and perfect each recipe, ensuring consistency, taste, and freshness in every order. 
            Whether you are grabbing a quick snack or enjoying a family meal, our menu is designed to delight 
            food lovers of all ages.
          </p>
          <p className="text-lg mb-4">
            Sustainability and community are at the heart of our brand. We source ingredients responsibly, 
            support local farmers, and strive to minimize our environmental footprint. Our goal is to create a 
            welcoming space where everyone can enjoy the joy of good food while supporting a brand that cares.
          </p>
          <p className="text-lg">
            Join us on our culinary journey and discover why Food is more than just a restaurant. 
            From innovative burgers to flavorful pizzas, from snacks to refreshing drinks, we promise 
            an experience that celebrates the rich flavors of India. Taste the difference, savor the flavor, 
            and become part of the Food family today!
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
