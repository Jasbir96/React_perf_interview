// static import
import logo from './logo.svg';
import './App.css';
import React, { useState, lazy, Suspense } from 'react'
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
// import About from "./pages/About";
// import Products from "./pages/Product";
// import Testimonials from './pages/Testimonial';
const About = lazy(() => { return import("./pages/About") })
const Products = lazy(() => { return import("./pages/Product") })
const Testimonials = lazy(() => { return import("./pages/Testimonial") })

function App() {
  const [posts, setPosts] = useState([]);
  const handleClick = () => {
    import("./post.js")
      .then((module) => { setPosts(module.default) })
  }
  return (
    <div className="App">
      <h1>Perf Examples</h1>
      <button onClick={handleClick}> Add Data</button>
      <ul >{
        posts.map((post, idx) => {
          return <p key={idx}>{JSON.stringify(post)}</p>
        })
      }</ul>
      <Navbar></Navbar>
      {/* show the loader while the routes / component is loaded  */}
      <Suspense fallback={<h1>...Loading</h1>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path="/testimonials" element={<Testimonials></Testimonials>}></Route>
        </Routes>
      </Suspense>


    </div>
  );
}

export default App;
