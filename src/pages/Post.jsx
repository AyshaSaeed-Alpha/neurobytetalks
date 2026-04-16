import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/service";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

import "./PStyling/post.css";

export default function Post() {
  const [post, setPost] = useState(null);

  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = async () => {
    const status = await service.deletePost(post.$id);

    if (status) {
      navigate("/");
    }
  };

  return post ? (
    <div className="post-page">
      <Container>
        <div className="post-wrapper">
          {/* IMAGE SECTION */}
          <div className="post-image-section">
            <a
              href={post.featuredImage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={post.featuredImage}
                alt={post.title}
                className="post-image"
              />
            </a>
            <div />
          </div>

          {/* CONTENT SECTION */}
          <div className="post-content-section">
            <h1 className="post-title">{post.title}</h1>

            <div className="post-content">{parse(post.content)}</div>
          </div>

          {isAuthor && (
            <div className="post-actions">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="mr-3 Btn-post">Edit</Button>
              </Link>

              <Button className="Btn-post" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  ) : null;
}
