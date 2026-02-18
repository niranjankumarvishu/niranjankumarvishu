import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI & Machine Learning Intern",
    company: "Intrainz",
    duration: "2024",
    description:
      "Developed AI-based solutions and implemented Machine Learning models for real-world datasets."
  },
  {
    title: "Data Science Intern",
    company: "Cognifyz Tech",
    duration: "2024",
    description:
      "Worked on Python-based data analysis, visualization, and predictive modeling projects."
  }
];

function Experience() {
  return (
    <section id="experience" className="experience">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="timeline">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span className="timeline-company">{exp.company}</span>
              <span className="timeline-duration">{exp.duration}</span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Experience;
