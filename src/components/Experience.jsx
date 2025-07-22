import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Co-Founder & COO",
    company: "Speak.ai",
    location: "Sharjah, UAE",
    date: "Feb 2025 – Present",
    highlights: [
      "Winner of INJAZ UAE Product of the Year 2025",
      "Co-founded a voice AI startup enabling real-time voice agent automation using LLMs and RAG",
      "Led operations and product development using microservices architecture (Supabase, Twilio, Google Calendar, n8n)",
      "Built prompt engineering frameworks to define agent personas, behavior, and dynamic call flows",
    ],
  },
  {
    role: "IT Security Intern",
    company: "Indigo IT Consultancy",
    location: "Abu Dhabi, UAE",
    date: "Jul 2025 – Aug 2025",
    highlights: [
      "Assisted in security assessments of mid-sized client infrastructures",
      "Audited firewall configurations and helped implement SIEM alerts for suspicious activity",
      "Researched modern VAPT platforms including Pentera and Qualys",
    ],
  },
  {
    role: "Research Intern",
    company: "EBTIC – Emirates ICT Innovation Center",
    location: "Abu Dhabi, UAE",
    date: "Jul 2024 – Aug 2024",
    highlights: [
      "Developed a fall detection system using Wi-Fi Channel State Information (CSI)",
      "Implemented and benchmarked machine and deep learning classifiers to distinguish human activities from falls",
      "Focused on non-invasive monitoring for elderly care without wearables",
    ],
  },
  {
    role: "Residential Assistant",
    company: "American University of Sharjah",
    location: "Sharjah, UAE",
    date: "Aug 2024 – Present",
    highlights: [
      "Led 30+ residents across academic, social, and emotional support domains",
      "Organized events and wellness check-ins to promote student success and community building",
      "Collaborated with housing staff and peers to improve residential life programming",
    ],
  },
  {
    role: "Student Research Assistant – Physics Dept.",
    company: "American University of Sharjah",
    location: "Sharjah, UAE",
    date: "Sep 2023 – Nov 2023",
    highlights: [
      "Assisted in research on the stability of perovskite materials for solar cells",
      "Conducted doping and SEM experiments to analyze material properties",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full px-6">
        <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-purple-400 text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-10">
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                className="rounded-lg p-6 shadow-lg border border-purple-700/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                  <h3 className="text-xl font-semibold text-purple-300">{job.role}</h3>
                  <span className="text-sm text-gray-400">{job.date}</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-1">
                  <p className="text-sm text-gray-400">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.location}</p>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-300 mt-2 space-y-1">
                  {job.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
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

export default Experience;
