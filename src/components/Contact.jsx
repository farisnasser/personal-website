import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full px-6">
        <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-purple-400 mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let’s Connect
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Whether you're looking to collaborate, hire, or just have a great conversation about AI, security, or tech — I'm always open to meaningful connections.
          </motion.p>

          <motion.div
            className="space-y-4 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-center">📍 Abu Dhabi, UAE</p>
            <p className="text-center">📧 <a href="mailto:nasserfaris788@gmail.com" className="text-blue-400 hover:underline">nasserfaris788@gmail.com</a></p>
            <p className="text-center">📞 <a href="tel:+971556077200" className="hover:underline">+971 55 607 7200</a></p>
            <p className="text-center">
              🔗 <a href="https://www.linkedin.com/in/faris-nasser-089808255/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
            </p>
            <p className="text-center">
              💻 <a href="https://github.com/farisnasser" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
            </p>
          </motion.div>

          <div className="mt-12 text-sm text-gray-500">
            Or just drop me a DM, I always enjoy a good chat 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
