import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming & Web Development",
    skills: ["Python", "JavaScript", "C++", "HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Cybersecurity & Networking",
    skills: [
      "Penetration Testing",
      "Linux",
      "Network Enumeration",
      "Privilege Escalation",
      "Kali Linux",
      "Burp Suite",
      "Nmap",
      "Metasploit",
    ],
  },
  {
    title: "Systems & Tools",
    skills: [
      "Git",
      "Postman",
      "n8n",
      "Supabase",
      "Red Hat Linux",
      "Google Calendar API",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Certifications",
    skills: [
      "Practical Ethical Hacking (TCM Security) – In Progress",
      "Red Hat System Administration I (RH124)",
      "INJAZ UAE – Product of the Year Award 2025",
      "Entrepreneurial Skills Pass – JA Worldwide",
      "TryHackMe – Introduction to Cyber Security",
      "TryHackMe – Pre-Security",
      "HTML & CSS Full Course – SuperSimple.dev",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full px-6">
        <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-purple-400 text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Skills & Certifications
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {skillCategories.map((cat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-md border border-purple-700/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-4">
                  {cat.title}
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-purple-800/20 border border-purple-500 text-purple-200 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
