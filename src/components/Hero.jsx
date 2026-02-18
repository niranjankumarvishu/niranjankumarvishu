import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-title"
      >
        Niranjan Kumar Vishu
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="hero-subtitle"
      >
        Software Developer | Python | Artificial Intelligence | Web Development
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hero-description"
      >
        Building scalable applications and modern tech solutions.
        Passionate about AI-driven systems and high-performance web applications.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a href="/resume.pdf" download className="resume-btn">
          Download Resume
        </a>

        <a href="#contact" className="contact-btn">
          Contact Me
        </a>
      </motion.div>

    </section>
  );
}

export default Hero;
