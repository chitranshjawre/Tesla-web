import React from 'react'

const Hero = () => {

    const Section = ({ id, title, content, image }) => {
        return (
          <section id={id} className="py-16 px-8 text-center bg-gray-900 text-white">
            <h2 className="text-4xl font-bold mb-6">{title}</h2>
            <img src={image} alt={title} className="mx-auto mb-6 w-3/4 rounded-lg" />
            <p className="text-lg max-w-3xl mx-auto">{content}</p>
          </section>
        );
      };
  return (
    <>
       <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 transition duration-300 hover:text-red-500">About Tesla</h2>
          <p className="text-lg leading-relaxed">
            Tesla was incorporated in July 2003 by Martin Eberhard and Marc Tarpenning as Tesla Motors. Its name is a tribute to inventor and electrical engineer Nikola Tesla. In February 2004, Elon Musk led Tesla's first funding round and became the company's chairman; in 2008, he was named chief executive officer.

            Tesla revolutionized the electric vehicle industry, launching its first car model, the Roadster sports car, in 2008. This was followed by the Model S sedan in 2012, the Model X SUV in 2015, the Model 3 sedan in 2017, the Model Y crossover in 2020, the Tesla Semi truck in 2022, and the Cybertruck pickup truck in 2023.

            Beyond vehicles, Tesla has expanded into energy solutions, producing solar panels, Powerwall home batteries, and large-scale energy storage solutions like Megapack. The company's mission is to accelerate the world's transition to sustainable energy.
          </p>
        </div>
      </section>


      <video
        className=" inset-0 w-full h-full object-cover "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/12140039_4096_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>



      <Section id="vehicles" title="Vehicles" content="Tesla offers a range of electric vehicles designed for efficiency, speed, and sustainability. The Model S, Model 3, Model X, and Model Y offer cutting-edge technology and high performance." image="/images/5.jpg" />
      <Section id="energy" title="Energy" content="Tesla Energy provides sustainable energy solutions, including solar panels and Powerwall battery storage, allowing users to generate and store clean energy for home and business use." image="/images/4.jpg" />
      <Section id="charging" title="Charging" content="Tesla's Supercharger network allows for fast and convenient charging across various locations, making long-distance travel seamless for Tesla owners." image=" /images/2.jpg" />
      <Section id="discover" title="Discover" content="Explore the latest advancements in Tesla technology, innovations in AI-driven driving, and future developments in the electric vehicle industry." image='/images/3.jpg' />
      <Section id="shop" title="Shop" content="Browse Tesla's official shop for accessories, charging solutions, apparel, and more to enhance your Tesla experience." image="/images/1.jpg" />
    </>
  )
}

export default Hero
