import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full px-6">
        <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-purple-400 mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto text-gray-300 text-md leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="mb-4">
            I'm currently pursuing a degree in computer engineering, where my academic journey has led me to explore the intersection of artificial intelligence, security, and privacy. My research interest lies in understanding how we can design intelligent systems — particularly voice-based agents and LLM applications — that respect user privacy and foster trust from the ground up.

            </p>
            <p className="mb-4">
            So far, I’ve worked on projects involving fall detection using Wi-Fi signals, privacy modeling in AI systems, and reinforcement learning for smart home security. I co-founded Speak.ai, a startup building real-time voice agents, where I’ve been applying what I’m learning to actual products — from backend development to system design.


              </p>
            <p>
            Whether it’s building tools, reading papers, or running events, I’m always curious and looking for new ways to contribute to new security-aware technologies.
</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
