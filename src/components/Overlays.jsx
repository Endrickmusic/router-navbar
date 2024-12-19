import { Link } from "react-router-dom"

import { overlayText } from "./text.jsx"

export function HomeOverlay() {
  return (
    <div className="m-10 p-4 leading-normal text-black-400 text-3xl">
      <h2 className="text-shadow underline">Home</h2>
      {overlayText}
    </div>
  )
}

export function AboutOverlay() {
  return (
    <div className="m-10 p-4 leading-normal text-black-400 text-3xl z-20">
      <h2>About</h2>
      {overlayText}
    </div>
  )
}

export function DashboardOverlay() {
  return (
    <div className="m-10 p-4 leading-normal text-black-400 text-3xl z-20">
      <h2>Dashboard</h2>
      {overlayText}
    </div>
  )
}

export function ErrorOverlay() {
  return (
    <div className="m-10 p-4 leading-normal text-black-400 text-3xl">
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
        <br />
        <br />
        {overlayText}
      </p>
    </div>
  )
}
