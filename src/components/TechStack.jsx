import { motion } from "framer-motion";

function TechStack() {
  const tech = [
    "Python",
    "React",
    "Flask",
    "Artificial Intelligence",
    "Machine Learning",
    "JavaScript",
    "Git & GitHub",
    "REST APIs"
  ];

  return (
    <section className="tech">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h2>

      <div className="tech-grid">
        {tech.map((item, index) => (
          <motion.div
            key={index}
            className="tech-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            {item}
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default TechStack;
