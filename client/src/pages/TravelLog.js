import React from "react";
import TabLayout from "../components/TabLayout";
import post1 from "../assets/images/post1.png"
import post2 from "../assets/images/post2.png";
import person2 from "../assets/images/person2.png"
import PostCard from "../components/PostCard";

const TravelLog = () => {
  const posts = [
    {
      username: "W.J.Perera",
      location: "Colombo, Sri Lanka",
      date: "12 November",
      profileImage: person2,
      image: post1,
      caption: "The best place to visit in Sri Lanka",
      likes: 73,
    },
    {
      username: "W.J.Perera",
      location: "Kandy, Sri Lanka",
      date: "20 January",
      profileImage: person2,
      image: post2,
      caption: "The best place to visit in Sri Lanka",
      likes: 198,
    },
  ];
  return (
    <TabLayout>
      <div className="container">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </TabLayout>
  );
};

export default TravelLog;
