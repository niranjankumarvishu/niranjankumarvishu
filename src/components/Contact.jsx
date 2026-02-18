import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_s9imv5l",
        "template_c1y4xdg",
        form.current,
        "qIBEhBs4bS1IrbHwy"
      )
      .then(() => {
        setStatus("Message sent successfully 🚀");
        setLoading(false);
        e.target.reset();
      })
      .catch(() => {
        setStatus("Something went wrong ❌");
        setLoading(false);
      });
  };

  return (
    <section className="contact">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {status && <p className="status-message">{status}</p>}
    </section>
  );
}

export default Contact;
