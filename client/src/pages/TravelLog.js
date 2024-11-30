import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TabLayout from "../components/TabLayout";
import PostCard from "../components/PostCard";

const TravelLog = () => {
  const { id: userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/api/posts/${userId}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  if (loading) {
    return (
      <TabLayout>
        <div className="container">Loading...</div>
      </TabLayout>
    );
  };

  return (
    <TabLayout>
      <div className="container">
        {posts.length > 0 ? (
          posts.map((post, index) => <PostCard key={index} post={post} />)
        ) : (
          <div>No posts found for this user.</div>
        )}
      </div>
    </TabLayout>
  );
};

export default TravelLog;
