import { useState } from "react";

const Navbar = () => {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-3xl z-50">
      <nav className="flex justify-between items-center px-8 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-purple-400 shadow-[0_0_24px_4px_rgba(162,89,255,0.3)]">
        <div className="text-purple-400 font-bold text-2xl tracking-widest select-none">       فارس    </div>
        <ul className="flex gap-8 text-gray-200 text-base font-semibold overflow-x-auto whitespace-nowrap">
          <li><a href="#about" className="hover:text-purple-300 transition">About</a></li>
          <li><a href="#experience" className="hover:text-purple-300 transition">Experience</a></li>
          <li><a href="#research" className="hover:text-purple-300 transition">Research</a></li>
          <li><a href="#skills" className="hover:text-purple-300 transition">Skills</a></li>
          <li><a href="#gallery" className="hover:text-purple-300 transition">Gallery</a></li>
          <li><a href="#contact" className="hover:text-purple-300 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
