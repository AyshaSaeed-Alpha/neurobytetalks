import React from "react";
import "./PStyling/About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About NeuroByteTalks</h1>

        <div className="about-line"></div>

        <p className="about-text">
          NeuroByteTalks is a modern blog and article publishing platform
          designed as a full-stack MVP that enables users to read, create, and
          manage digital content in a structured and scalable environment.
        </p>

        <p className="about-text">
          The platform allows users to register and log in using secure
          email-based authentication. Once authenticated, users can create,
          edit, and manage their own blog posts through a rich content editor
          with support for formatted text, images, and structured writing.
        </p>

        <p className="about-text">
          Each post is generated with a unique slug-based routing system, making
          content easily accessible and SEO-friendly. Users can save posts as
          drafts or publish them to make them visible to the public. Only
          published content is accessible to visitors.
        </p>

        <p className="about-text">
          Image uploads are handled through a cloud-based media system ensuring
          optimized storage and fast delivery. The editor provides a smooth
          writing experience with advanced formatting capabilities suitable for
          blogging and content creation.
        </p>

        <p className="about-text">
          Access control is enforced so that only the original author of a post
          can edit or delete their content, ensuring secure ownership and data
          integrity across the platform.
        </p>

        <p className="about-text">
          NeuroByteTalks is built as an MVP project to demonstrate real-world
          full-stack development practices, combining modern frontend
          architecture, backend services, authentication systems, and scalable
          content workflows.
        </p>

        <p className="about-text">
          This project represents an early-stage product vision and can be
          accessed and explored directly through the main website.
        </p>

        <div className="about-footer">
          Designed & Developed by<span>Aysha Saeed</span>
        </div>
        <div>
          {" "}
          Here Explore more work{" "}
          <a
            href="https://ayshasaeed.is-a.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#4F46E5",
              textDecoration: "underline",
              marginLeft: "4px",
            }}
          >
            ayshasaeed.is-a.dev
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default About;
