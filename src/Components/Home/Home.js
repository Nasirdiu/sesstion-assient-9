import React, { useContext, useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import "./Home.css";
import { blogContext } from "../../App";
const Home = () => {
  // const [blogs, setBlog] = useState([]);
  const [blog, setBlog] = useContext(blogContext);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="blogs-container">
      {blog.map((blog, index) => (
        <Blogs key={index} blog={blog}></Blogs>
      ))}
    </div>
  );
};

export default Home;
