import { motion } from "framer-motion";

const certifications = [
  {
    title: "Python Program",
    issuer: "EISystem",
    year: "2024"
  },
  {
    title: "Data Science with Python",
    issuer: "Main Flow Services",
    year: "2024"
  },
  {
    title: "Artificial Intelligence",
    issuer: "Intrainz",
    year: "2024"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    year: "2023"
  }
];

function Certifications() {
  return (
    <section id="certifications" className="certifications">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      <div className="cert-grid">

        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="cert-icon">🏆</div>
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="cert-year">{cert.year}</span>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Certifications;
