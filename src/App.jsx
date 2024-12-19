import { useState } from "react"
import Logo from "/face-blowing-a-kiss.svg"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Routes, Route, Outlet, Link } from "react-router-dom"

import {
  HomeUnderlayer,
  AboutUnderlayer,
  DashboardUnderlayer,
  ErrorUnderlayer,
} from "./components/Underlayers.jsx"
import {
  HomeExperience,
  AboutExperience,
  DashboardExperience,
  ErrorExperience,
} from "./components/Experiences.jsx"
import {
  HomeOverlay,
  AboutOverlay,
  DashboardOverlay,
  ErrorOverlay,
} from "./components/Overlays.jsx"

import "./index.css"

export default function App() {
  return (
    <>
      {/* Underlayer Routes */}
      <Routes>
        <Route path="/" element={<HomeUnderlayer />} />
        <Route path="/about" element={<AboutUnderlayer />} />
        <Route path="/dashboard" element={<DashboardUnderlayer />} />
        <Route path="*" element={<ErrorUnderlayer />} />
      </Routes>

      {/* Overlay Routes (your current Layout routes) */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeOverlay />} />
          <Route path="/about" element={<AboutOverlay />} />
          <Route path="/dashboard" element={<DashboardOverlay />} />
          <Route path="*" element={<ErrorOverlay />} />
        </Route>
      </Routes>

      {/* Canvas/Experience Routes */}
      <Canvas
        className="fixed inset-0"
        shadows
        camera={{ position: [0, 0, 5], fov: 40 }}
      >
        <Environment files="./hdris/envmap.hdr" />
        <Routes>
          <Route path="/" element={<HomeExperience />} />
          <Route path="/about" element={<AboutExperience />} />
          <Route path="/dashboard" element={<DashboardExperience />} />
          <Route path="*" element={<ErrorExperience />} />
        </Routes>
      </Canvas>
    </>
  )
}

function Layout() {
  return (
    <div className="absolute z-20">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="border-transparent">
        <ul className="flex justify-start mx-6 m-3 space-x-5 border-transparent">
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
  )
}
