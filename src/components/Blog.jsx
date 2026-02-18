import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "How I Built My AI Projects Using Python",
    slug: "ai-projects-python",
    description:
      "A deep dive into building AI systems using Python, Machine Learning models, and real-world datasets."
  },
  {
    title: "React Portfolio Development Guide",
    slug: "react-portfolio-guide",
    description:
      "Step-by-step guide to building a professional React portfolio website with animations and SEO."
  }
];

function Blog() {
  return (
    <section id="blog" className="blog">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Blog & Articles
      </motion.h2>

      <div className="blog-grid">

        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="blog-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{post.title}</h3>
            <p>{post.description}</p>

            <Link to={`/blog/${post.slug}`} className="read-more-btn">
              Read More
            </Link>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Blog;
