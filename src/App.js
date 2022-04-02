import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Video from "./Components/Video/Video";
import Login from "./Components/Login/Login";
import NotrFound from "./Components/NotrFound/NotrFound";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import { createContext, useState } from "react";
export const blogContext = createContext();

function App() {
  const [blog, setBlog] = useState([]);
  return (
    <blogContext.Provider value={[blog, setBlog]}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/">Home</Route>
          <Route path="/home" element={<Home></Home>}>
            Home
          </Route>
          <Route path="/video" element={<Video></Video>}>
            Video
          </Route>
          <Route path="/login" element={<Login></Login>}>
            Login
          </Route>
          <Route path="/blog/:id" element={<BlogDetails></BlogDetails>}></Route>
          <Route path="*" element={<NotrFound></NotrFound>}></Route>
        </Routes>
      </div>
    </blogContext.Provider>
  );
}

export default App;
