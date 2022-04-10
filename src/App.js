import './App.css';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Videos from './Components/Videos/Videos';




export const BlogContext = createContext();

function App() {

  const [blogs, setBlogs] = useState([]);

  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
