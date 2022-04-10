import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../App';
import Blog from "../Blog/Blog";
import './Home.css'


const Home = () => {

    const [blogs, setBlogs] = useContext(BlogContext);

    useEffect(() => {
        fetch("https://retro-tech-talks.herokuapp.com/blogs")
          .then((res) => res.json())
          .then((data) => setBlogs(data));
      }, []);

    return (
        <div className='blogs-container'>
      {blogs.map((blog, index) => (
        <Blog key={index} blog={blog} />
      ))}
    </div>
    );
};

export default Home;