import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-pink-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About Our Food Delivery Platform
        </h1>

        <p className="text-gray-700 text-justify mb-6">
          Welcome to our premier food delivery platform, where we combine convenience, quality, and a wide variety of delicious meals to satisfy your cravings. Our mission is to bring fresh, tasty, and safe food to your doorstep, offering a seamless ordering experience for everyone. From burgers to pizzas, snacks to drinks, we strive to provide a comprehensive selection of items for every taste and preference. Our focus is on quality ingredients, exceptional service, and creating a platform that makes your food journey enjoyable and hassle-free.
        </p>

        <p className="text-gray-700 text-justify mb-6">
          The food industry today demands speed without compromising on quality, and that is precisely what we aim to deliver. Every dish offered on our platform is curated with care, ensuring that it reaches you in perfect condition. We understand that food is not just about sustenance—it’s about experience, pleasure, and comfort. Therefore, we carefully select our partner restaurants and chefs to guarantee that every meal meets high standards of taste, hygiene, and presentation.
        </p>

        <p className="text-gray-700 text-justify mb-6">
          Our platform features four main categories to cater to diverse tastes: Burgers, Pizza, Snacks, and Drinks. Each category is designed to provide variety and satisfy different cravings. Burgers range from classic cheeseburgers to specialty gourmet options, with fresh vegetables, quality meat, and soft buns. Pizza lovers can enjoy a variety of vegetarian and non-vegetarian options, each made with fresh dough, rich sauces, and high-quality toppings. Snacks are crafted to be crispy, flavorful, and convenient for on-the-go enjoyment, while drinks include refreshing cold beverages, healthy juices, and shakes to complement every meal.
        </p>

        <p className="text-gray-700 text-justify mb-6">
          One of our main goals is to ensure **customer satisfaction** at every step. From browsing our menu to placing an order, we have designed the user experience to be simple and intuitive. You can place your order via a direct call or upload your order online, depending on your preference. Our platform supports quick processing to ensure your order is received and prepared promptly, maintaining the freshness and quality of each item.
        </p>

        <p className="text-gray-700 text-justify mb-6">
          Safety and hygiene are top priorities in our operations. Every item is prepared in certified kitchens that follow strict guidelines for cleanliness and food safety. Our partner restaurants adhere to FDA and GMP standards, ensuring that all meals are not only tasty but also safe to consume. This commitment to hygiene provides peace of mind to our customers while enhancing the overall dining experience.
        </p>

        <p className="text-gray-700 text-justify mb-6">
          Convenience is another cornerstone of our platform. We recognize that in today’s fast-paced world, people often do not have time to cook or go out to dine. Our service is designed to save time and effort by bringing meals directly to your location. With just a few clicks, you can explore a wide variety of options, view prices, and make selections according to your preferences. We also provide timely updates and notifications to keep you informed about the status of your order.
        </p>

        <p className="text-gray-700 text-justify mb-6">
          In addition to convenience and safety, we emphasize **value for money**. Our platform offers amazing deals across all categories, making sure that customers receive delicious meals at competitive prices. From discounts on combo meals to limited-time offers on popular items, we aim to make every order rewarding. This ensures that both casual diners and regular customers benefit from our services without compromising on quality.
        </p>

        <p className="text-gray-700 text-justify mb-6">
          Customer feedback is vital to our continuous improvement. We actively encourage our users to share their experiences and suggestions. This feedback loop allows us to refine our platform, enhance menu options, and provide better service. Our goal is to build lasting relationships with our customers by being responsive, attentive, and committed to excellence in all aspects of our service.
        </p>

        <p className="text-gray-700 text-justify mb-6">
          Our vision extends beyond just delivering food; we aim to create a community of food lovers who can rely on our platform for quality, consistency, and enjoyment. Every aspect of our operations, from the website design to the food preparation and delivery process, is optimized to provide a superior experience. We integrate technology, logistics, and culinary expertise to create a seamless journey for our users.
        </p>

        <p className="text-gray-700 text-justify mb-6">
          Sustainability and environmental responsibility are also integral to our operations. We encourage our partner restaurants to adopt eco-friendly packaging and reduce food waste wherever possible. By focusing on sustainable practices, we not only protect the environment but also create a responsible and forward-thinking brand that our customers can trust.
        </p>

        <p className="text-gray-700 text-justify mb-6">
          Overall, our platform combines quality, variety, convenience, safety, value, and sustainability to deliver a holistic food experience. From the first click on our website or app to the moment the meal arrives at your door, every step is designed with the customer in mind. We are committed to innovation, excellence, and delighting our customers in every possible way. Whether you are craving a juicy burger, cheesy pizza, crunchy snacks, or a refreshing drink, our platform ensures that your meal is just a few moments away.
        </p>
      </div>

      {/* Pink Background Section at Bottom */}
      <div className="w-full bg-pink-300 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Us Today!
          </h2>
          <p className="text-gray-800 text-md md:text-lg">
            Experience the best food delivery service with amazing deals, fresh meals, and quick delivery. Explore our platform to discover burgers, pizza, snacks, and drinks made to perfection. Enjoy convenience and quality at your fingertips.
          </p>
        </div>
      </div>
      {/* Image Section Below Pink Background */}
<div className="w-full  py-12">
  <div className="max-w-6xl mx-auto px-4">
    <img
      src="/images/i.jpg"
      alt="Food Delivery"
      className="w-full h-auto rounded-lg object-cover"
    />
  </div>
</div>

    </div>
    
  );
};

export default AboutUs;
