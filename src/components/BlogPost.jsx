import { useParams } from "react-router-dom";
import { useEffect } from "react";

const blogContent = {
  "ai-projects-python": {
    title: "How I Built My AI Projects Using Python",
    description: "Building AI systems using Python and Machine Learning.",
    content: `
      Artificial Intelligence projects require structured datasets,
      model training, evaluation, and deployment.
      Python makes this efficient using libraries like Scikit-learn and TensorFlow.
    `
  },
  "react-portfolio-guide": {
    title: "React Portfolio Development Guide",
    description: "How to build a professional React portfolio with SEO.",
    content: `
      A professional React portfolio includes animations,
      SEO optimization, structured data, and responsive design.
    `
  }
};

function BlogPost() {
  const { slug } = useParams();
  const post = blogContent[slug];

  useEffect(() => {
    if (post) {
      document.title = post.title + " | Niranjan Kumar Vishu";

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        author: {
          "@type": "Person",
          name: "Niranjan Kumar Vishu"
        },
        publisher: {
          "@type": "Person",
          name: "Niranjan Kumar Vishu"
        }
      });

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [post]);

  if (!post) {
    return <h2 style={{ textAlign: "center", marginTop: "150px" }}>Post Not Found</h2>;
  }

  return (
    <section style={{ padding: "150px 20px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ color: "#00f7ff" }}>{post.title}</h1>
      <p style={{ marginTop: "20px", lineHeight: "1.8", color: "#ccc" }}>
        {post.content}
      </p>
    </section>
  );
}

export default BlogPost;
