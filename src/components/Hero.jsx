import { motion } from "framer-motion";
//import CV from "../assets/Faris-Nasser-CV.pdf"; // replace with your actual CV

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-24">
      <div className="relative bg-black/60 backdrop-blur-md border border-purple-400 rounded-2xl shadow-[0_0_32px_8px_rgba(162,89,255,0.15)] px-8 py-12 max-w-5xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">
        {/* Left: Text and Buttons */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
            Hi, I’m <span className="text-purple-400">Faris Nasser</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-purple-300 mb-4">AI | Security</h2>
          <p className="text-gray-300 max-w-xl mb-6">
          I'm a computer engineering student with a growing research interest in securing intelligent systems powered by AI and large language models. I care deeply about the human side of technology, and I’m exploring how developers can build more privacy-conscious, trustworthy AI tools.


          </p>
          <div className="flex gap-4 justify-center md:justify-start mb-4">
            <a href="/gallery/Faris-Nasser-CV.pdf" download className="px-6 py-2 rounded-full bg-purple-500 !text-white font-bold shadow-md hover:bg-purple-600 transition">Download CV</a>
            <a href="#contact" className="px-6 py-2 rounded-full bg-purple-500 !text-white font-bold shadow-md hover:bg-purple-600 transition">Contact Me</a>
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-purple-400 shadow-[0_0_32px_8px_rgba(162,89,255,0.3)] overflow-hidden bg-white/10 flex items-center justify-center">
            <img src="/gallery/my-photo.JPG" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
