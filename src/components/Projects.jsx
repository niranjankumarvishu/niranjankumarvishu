import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/users/niranjankumarvishu/repos", {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);

        setRepos(filtered);
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Live GitHub Projects
      </motion.h2>

      <div className="project-grid">
        {repos.map(repo => (
          <motion.div
            key={repo.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description available."}</p>

            <div className="project-links">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
