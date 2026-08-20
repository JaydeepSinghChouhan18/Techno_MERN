import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <section id="blog" className="blog-page">
      <div className="blog-hero container">
        <div>
          <p>FROM THE BLOG</p>
          <h2>From the blog</h2>
        </div>
        <a className="blog-all-link" href="#">All articles →</a>
      </div>

      <div className="blog-grid container">
        <article className="blog-card">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80"
            alt="Why I ditched heavy CSS frameworks"
          />
          <div className="blog-card-body">
            <span>Design · Mar 8, 2025</span>
            <h3>Why I ditched heavy CSS frameworks for Tailwind</h3>
            <p>
              After years of fighting specificity wars, here's what finally
              convinced me to make the switch.
            </p>
            <a className="blog-read-more" href="#">
              Read more →
            </a>
          </div>
        </article>

        <article className="blog-card">
          <img
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&q=80"
            alt="Building a design system from scratch"
          />
          <div className="blog-card-body">
            <span>Dev · Feb 21, 2025</span>
            <h3>Building a design system from scratch in a weekend</h3>
            <p>
              Tokens, components, docs — the process I follow to spin up a
              coherent system in record time.
            </p>
            <a className="blog-read-more" href="#">
              Read more →
            </a>
          </div>
        </article>

        <article className="blog-card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
            alt="Freelance lessons from first year"
          />
          <div className="blog-card-body">
            <span>Freelance · Jan 14, 2025</span>
            <h3>5 lessons from my first year of full-time freelancing</h3>
            <p>
              Contracts, pricing, scope creep — the things nobody tells you before
              you go solo.
            </p>
            <a className="blog-read-more" href="#">
              Read more →
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blog;

