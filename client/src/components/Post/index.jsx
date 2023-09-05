import React from 'react';
import "./style.css";
import { useState, useEffect } from "react";

// Sample post data (you can replace this with actual data from your backend)
const posts = [
    {
      id: 1,
      title: 'Post 1',
      description: 'Raccoon for sale.',
    },
    {
      id: 2,
      title: 'Post 2',
      description: 'Triton Cash for free.',
    },
  ];
  
  const PostListingPage = () => {
    // State to keep track of selected post
    const [selectedPost, setSelectedPost] = useState(null);
  
    // Function to handle post selection
    const handlePostSelect = (postId) => {
      const post = posts.find((p) => p.id === postId);
      setSelectedPost(post);
    };
  
    // Render post list
    const renderPostList = () => {
      return posts.map((post) => (
        <div key={post.id} className="post-item" onClick={() => handlePostSelect(post.id)}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ));
    };
  
    // Render selected post details
    const renderSelectedPost = () => {
      if (!selectedPost) {
        return <p>Please select a post to view details.</p>;
      }
  
      return (
        <div className="selected-post">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.description}</p>
        </div>
      );
    };
  
    return (
      <div className="post-listing-page">
        <div className="post-list">
          {renderPostList()}
        </div>
        <div className="selected-post-details">
          {renderSelectedPost()}
        </div>
      </div>
    );
  };
  
  export default PostListingPage;