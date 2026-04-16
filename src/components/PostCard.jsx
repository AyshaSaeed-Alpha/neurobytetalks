import React from "react";
import { Link } from "react-router-dom";
import "./Styles/PostCard.css";

function PostCard({ $id, title, featuredImage, content }) {
  const excerpt = content
    ? content.replace(/<[^>]+>/g, "").slice(0, 100) + "..."
    : "Click to read the full article.";

  return (
    <Link to={`/post/${$id}`} className="post-card">
      <div className="post-card__image-wrap">
        <img src={featuredImage} alt={title} />
      </div>

      <div className="post-card__body">
        <h2 className="post-card__title">{title}</h2>
        <p className="post-card__excerpt">{excerpt}</p>
        <span className="post-card__read-more">
          Read more <span className="post-card__arrow">→</span>
        </span>
      </div>
    </Link>
  );
}

export default PostCard;
