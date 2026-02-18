import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        About Me
      </motion.h2>

      {/* Profile Image */}
      <motion.div
        className="profile-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="/profile.jpg"
          alt="Niranjan Kumar Vishu"
          className="profile-image"
        />
      </motion.div>

      {/* Center Text */}
      <motion.div
        className="about-text-centered"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          I'm <span className="highlight">Niranjan Kumar Vishu</span>, a passionate 
          <span className="highlight"> Software Developer</span> from India 
          specializing in <span className="highlight"> Python</span>, 
          <span className="highlight"> Artificial Intelligence</span>, and 
          <span className="highlight"> Modern Web Development</span>.
        </p>

        <p>
          I focus on building scalable applications, AI-driven systems, 
          and high-performance web solutions with clean architecture 
          and optimized user experience.
        </p>

        <p>
          I am actively seeking opportunities in 
          <span className="highlight"> Software Development</span> and 
          <span className="highlight"> AI Engineering</span> roles where 
          I can contribute, innovate, and grow.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="about-cards-row"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-card">
          <h3>💡 Problem Solver</h3>
          <p>Strong logical thinking and structured development approach.</p>
        </div>

        <div className="about-card">
          <h3>🚀 Fast Learner</h3>
          <p>Quickly adapts to new technologies and frameworks.</p>
        </div>

        <div className="about-card">
          <h3>🎯 Goal Oriented</h3>
          <p>Focused on delivering impactful and scalable solutions.</p>
        </div>
      </motion.div>

    </section>
  );
}

export default About;
