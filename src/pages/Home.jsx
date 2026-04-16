import React, { useEffect, useState } from "react";
import service from "../appwrite/service";
import { Container, PostCard } from "../components";
import "./PStyling/Home.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    service.getPosts().then((posts) => {
      if (posts) setPosts(posts.documents);
      setLoading(false);
    });
  }, []);

  // LOADING STATE (SKELETON)
  if (loading) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-64  bg-white whianimate-pulse rounded-xl"
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }

  // EMPTY STATE
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-xl font-light hover:text-gray-500">
                "The future belongs to those who believe in the beauty of their
                dreams." <br /> Loading...
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // MAIN UI (RESPONSIVE FIX)
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

export default Home;
