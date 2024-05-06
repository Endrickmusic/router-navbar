import { useState } from 'react'
import Logo from '/face-blowing-a-kiss.svg'
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import Experience from "./Experience"
import { text } from "./text"

import './index.css'

export default function App() {

 return (
  
  <>
  <Routes>
    <Route path="/" element={<Layout />}> 
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />    
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>

  <Canvas shadows camera={{ position: [3, 3, 3], fov: 40 }}>
         
      <Environment
        files="./hdris/envmap.hdr" />
        <color 
          attach="background" 
          args={["#aaefef"]} />    
      <Experience />
  
  </Canvas>
  </>
  )
}

function Layout() {
  return (
    <div className='absolute z-10'>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className='border-transparent'>
        <ul className='flex justify-start mx-6 m-3 space-x-5 border-transparent'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}


function Home() {
  return (
    <div className='m-10 p-4 leading-normal text-black-400 text-3xl'>
      <h2 className='text-shadow underline'>Home</h2>
      {text}
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
      {text}
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}