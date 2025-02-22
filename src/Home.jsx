import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"

const Home = () => {

  return (
    <>
  <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 w-full fixed top-0 left-0 shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-extrabold tracking-wide">Chitransh's Portfolio</h1>
        <ul className="flex space-x-8">
          <li className="flex items-center">
            <span className="text-white mr-2">🏠</span>
            <a href="#" className="text-white font-bold text-lg hover:text-gray-300 transition duration-300">Home</a>
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">👤</span>
            <a href="#" className="text-white font-bold text-lg hover:text-gray-300 transition duration-300">About</a>
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">💼</span>
            <a  href="#" className="text-white font-bold text-lg hover:text-gray-300 transition duration-300">Projects</a>
          </li>
          <li className="flex items-center">
            <span className="text-white mr-2">✉️</span>
            <Link to="/contact" className="text-white font-bold text-lg hover:text-gray-300 transition duration-300"> contact</Link>
          </li>
        </ul>
      </div>
    </nav>

  <div className="bg-gray-900 text-white min-h-screen ">
  
      <header className="flex flex-col items-center justify-center h-screen text-center p-6">
        <h1 className="text-5xl font-bold">Chitransh Jawre</h1>
        <p className="text-xl mt-4">Front-End Developer | React.js | Tailwind CSS</p>
      </header>

      <section className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-lg">I am a passionate front-end developer skilled in React.js, Tailwind CSS, and AI tools like ChatGPT.</p>
      </section>

      <section className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="mt-2">A web app built using React.js and Tailwind CSS.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="mt-2">A portfolio website designed with modern UI principles.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Project 3</h3>
            <p className="mt-2">An interactive dashboard for data visualization.</p>
          </div>
        </div>
      </section>

      <footer className="text-center p-6 mt-12">
        <p>&copy; 2025 Chitransh Jawre. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default Home
// https://websitedemos.net/fashion-photography-04/?customize=template