import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BlogDetails.css";
import { blogContext } from "../../App";
const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog] = useContext(blogContext);
  const blogs = blog.find((blog) => blog._id == id);
  return (
    <div className="header-gradient">
      <div>
        <button className="back-button" onClick={() => navigate(-1)}>
          <p>Back</p>
        </button>
      </div>
      <div className="blog-details">
        <div className="blog-image">
          <img src={blogs?.imageURL} alt="" />
        </div>
        <h1>{blogs?.title}</h1>
        <p>{blogs?.blog}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
