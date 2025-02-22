import React from 'react'

const Footer = () => {
  return (
    <>
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

export default Footer
