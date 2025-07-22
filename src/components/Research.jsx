import { motion } from "framer-motion";

const researchData = [
  {
    title: "Fall Detection Using Wi-Fi Channel State Information",
    venue: "2024 7th International Conference on Signal Processing and Information Security (ICSPIS)",
    link: "https://doi.org/10.1109/icspis63676.2024.10812620",
    authors: "F. Nasser, A. Suliman, K. Poon, A. Alteneiji, U. Ahmad",
    type: "Conference Paper",
    date: "Nov 2024",
    description:
      "We proposed a machine learning-based method to classify human activities and detect falls using Wi-Fi CSI, enabling non-invasive monitoring without wearable sensors.",
  },
  {
    title: "Adaptive Honeypot Framework for Smart Home Security (in progress)",
    type: "Senior Design Project",
    supervisor: "Under Dr. Anastassia Gharib",
    description:
      "Developing a reinforcement learning–based system to adaptively deploy honeypots in IoT environments, enhancing intrusion detection for smart homes.",
  },
  {
    title: "Validating the Multiverse Privacy Theory (in progress)",
    type: "Independent Research",
    supervisor: "Collaborating with Dr. Ece Gumusel",
    description:
      "Exploring adaptive, dataset-driven enhancements to the Multiverse Privacy Theory framework to better capture contextual integrity in AI interactions.",
  },
];

const Research = () => {
  return (
    <section id="research" className="w-full py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full px-6">
        <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-purple-400 text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Research & Publications
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-10">
            {researchData.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-lg p-6 shadow-md border border-purple-700/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-purple-300">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {item.authors && <span>{item.authors} • </span>}
                  {item.date && <span>{item.date} • </span>}
                  {item.venue || item.type}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-blue-400 hover:underline mt-1"
                  >
                    View Paper ↗
                  </a>
                )}
                {item.supervisor && (
                  <p className="text-sm italic text-gray-500 mt-1">
                    {item.supervisor}
                  </p>
                )}
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
