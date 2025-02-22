import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Contact from './contact'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)


  const Section = ({ id, title, content, image }) => {
    return (
      <section id={id} className="py-16 px-8 text-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <img src={image} alt={title} className="mx-auto mb-6 w-3/4 rounded-lg" />
        <p className="text-lg max-w-3xl mx-auto">{content}</p>
      </section>
    );
  };



  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <div className="relative w-full h-screen bg-cover bg-center" style={{
        backgroundImage: "url('public/images/6.jpg')"
      }}>
       



<nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md p-4 flex justify-between items-center text-white z-10">
      <div className="text-xl font-bold ml-6">TESLA</div>
      <button 
        className="md:hidden text-white text-2xl mr-6" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row md:space-x-6 text-sm uppercase transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
        <li><a href="#vehicles" className="hover:underline block py-2 px-4">Vehicles</a></li>
        <li><a href="#energy" className="hover:underline block py-2 px-4">Energy</a></li>
        <li><a href="#charging" className="hover:underline block py-2 px-4">Charging</a></li>
        <li><a href="#discover" className="hover:underline block py-2 px-4">Discover</a></li>
        <li><a href="#shop" className="hover:underline block py-2 px-4">Shop</a></li>
      </ul>
      <div className="hidden md:flex items-center space-x-4 mr-6">
        <button className="hover:underline">🌎</button>
        <button className="hover:underline">🔍</button>
        <button className="hover:underline">👤</button>
      </div>
    </nav>


      {/* hero */}

        <div className="absolute inset-0 bg- bg-opacity-50 flex items-center justify-center text-white">
          <div className="text-center px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Model Y Starting at $36,490<br />After Federal Tax Credit</h1>
            <p className="text-lg mb-4">
              Eligible buyers qualify for a <span className="font-semibold">$7,500 federal tax credit</span>. Applied at time of Model Y delivery. <a href="#" className="underline">See Details</a>
            </p>
            <p className="text-sm mb-6">Prices will increase by $1,000 for all Model Y trims on April 1.</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">Shop Available</button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold">Demo Drive</button>
            </div>
          </div>
        </div>
      </div>




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
    <source src="/public/images/12140039_4096_2160_30fps.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>



      <Section id="vehicles" title="Vehicles" content="Tesla offers a range of electric vehicles designed for efficiency, speed, and sustainability. The Model S, Model 3, Model X, and Model Y offer cutting-edge technology and high performance." image="public/images/5.jpg" />
      <Section id="energy" title="Energy" content="Tesla Energy provides sustainable energy solutions, including solar panels and Powerwall battery storage, allowing users to generate and store clean energy for home and business use." image="public/images/4.jpg" />
      <Section id="charging" title="Charging" content="Tesla's Supercharger network allows for fast and convenient charging across various locations, making long-distance travel seamless for Tesla owners." image=" public/images/2.jpg" />
      <Section id="discover" title="Discover" content="Explore the latest advancements in Tesla technology, innovations in AI-driven driving, and future developments in the electric vehicle industry." image='public/images/3.jpg' />
      <Section id="shop" title="Shop" content="Browse Tesla's official shop for accessories, charging solutions, apparel, and more to enhance your Tesla experience." image="public/images/1.jpg" />
    
    



   {/* footer */}


 <footer className="bg-black text-white py-10 text-center  text-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-left">
        <div>
          <h3 className="font-bold mb-2">Tesla</h3>
          <ul>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Vehicles</h3>
          <ul>
            <li><a href="#vehicles" className="hover:underline">Model S</a></li>
            <li><a href="#vehicles" className="hover:underline">Model 3</a></li>
            <li><a href="#vehicles" className="hover:underline">Model X</a></li>
            <li><a href="#vehicles" className="hover:underline">Model Y</a></li>
            <li><a href="#vehicles" className="hover:underline">Cybertruck</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Energy</h3>
          <ul>
            <li><a href="#" className="hover:underline">Solar Panels</a></li>
            <li><a href="#" className="hover:underline">Solar Roof</a></li>
            <li><a href="#" className="hover:underline">Powerwall</a></li>
            <li><a href="#" className="hover:underline">Megapack</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <ul>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Charging</a></li>
            <li><a href="#" className="hover:underline">Service</a></li>
            <li><a href="#" className="hover:underline">Find Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Legal</h3>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Vehicle Recalls</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-6 text-gray-400">&copy; {new Date().getFullYear()} Tesla, Inc. All Rights Reserved.</p>
    </footer>

    </>
  )
}

export default App
