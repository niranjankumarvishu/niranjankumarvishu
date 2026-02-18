import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="footer">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="footer-name">Niranjan Kumar Vishu</h3>

        <p className="footer-role">
          Software Developer | Python | AI & Web Development
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/niranjankumarvishu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/niranjan-kumar-vishu/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:niranjankumarvishu@gmail.com">
            Email
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Niranjan Kumar Vishu. All rights reserved.
        </p>
      </motion.div>

    </footer>
  );
}

export default Footer;
