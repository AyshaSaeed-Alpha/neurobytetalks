import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import service from "../appwrite/service";
import "./PStyling/Home.css";
function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="ticker-wrapper">
          <div className="ticker">
            <span>
              Publish your articles on NeuroByteTalks &nbsp; • &nbsp; Publish
              your articles on NeuroByteTalks &nbsp; • &nbsp; Publish your
              articles on NeuroByteTalks
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.$id} className="w-full">
              <PostCard {...post} />
            </div>
          ))}
        </div>
        <div className="ticker-wrapper2">
          <div className="ticker">
            <span>
              Your content. Your voice. Your platform&nbsp; • &nbsp; Publish
              your articles on NeuroByteTalks&nbsp; • &nbsp; Your content. Your
              voice. Your platform
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
