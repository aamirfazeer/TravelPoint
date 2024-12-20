import React from "react";
import "./PostCard.css";
import { FaRegHeart } from "react-icons/fa";

const PostCard = ({ post }) => {
  const date = new Date(post.updated_at);
  const formatLocalDate = date.toLocaleString();

  return (
    <div className="card mb-4 post">
      <div className="card-header d-flex align-items-center mt-1">
        <img
          src={`data:image/jpeg;base64,${post.profile_pic}`}
          className="rounded-circle me-3 "
          alt="Profile"
          width="40"
          height="40"
        />
        <div className="ml-3">
          <strong>{post.username}</strong> is in {post.location}
          <div className="text-muted">{formatLocalDate}</div>
          <div>{post.caption}</div>
        </div>
      </div>
      <img src={`data:image/jpeg;base64,${post.images}`} alt="Post" />
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center fs-4 ms-1">
          <FaRegHeart className="me-2 fs-3" />
          {post.likes}
        </div>
        <button className="btn btn-outline-secondary btn-md">
          View Comments
        </button>
      </div>
    </div>
  );
};

export default PostCard;
