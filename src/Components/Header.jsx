import React from 'react'
import { useState } from 'react'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="relative w-full h-screen bg-cover bg-center" style={{
                backgroundImage: "url('/images/6.jpg')"
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
        </>
    )
}

export default Header
