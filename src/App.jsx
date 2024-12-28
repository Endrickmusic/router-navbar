import { useState } from "react"
import Logo from "/face-blowing-a-kiss.svg"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom"

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
        <Route exact path="/" element={<HomeUnderlayer />} />
        <Route path="/about" element={<AboutUnderlayer />} />
        <Route path="/dashboard" element={<DashboardUnderlayer />} />
        <Route path="*" element={<ErrorUnderlayer />} />
      </Routes>

      {/* Overlay Routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeOverlay />} />
          <Route path="/about" element={<AboutOverlay />} />
          <Route path="/dashboard" element={<DashboardOverlay />} />
          <Route path="*" element={<ErrorOverlay />} />
        </Route>
      </Routes>

      {/* Canvas/Experience Routes */}
      <Canvas>
        <Routes>
          <Route exact path="/" element={<HomeExperience />} />
          <Route path="/about" element={<AboutExperience />} />
          <Route path="/dashboard" element={<DashboardExperience />} />
          <Route path="*" element={<ErrorExperience />} />
        </Routes>
      </Canvas>
    </>
  )
}

function Layout() {
  const location = useLocation()

  return (
    <div className="absolute z-20">
      <nav className="border-transparent">
        <ul className="flex justify-start mx-6 m-3 space-x-5 border-transparent">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "underline" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "underline" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={location.pathname === "/dashboard" ? "underline" : ""}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/nothing-here"
              className={
                location.pathname === "/nothing-here" ? "underline" : ""
              }
            >
              Nothing Here
            </Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  )
}
