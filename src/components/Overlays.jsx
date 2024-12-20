import { Link } from "react-router-dom"

import { overlayText } from "./text.jsx"

export function HomeOverlay() {
  return (
    <div className="m-10 p-4 leading-normal text-black-400 text-3xl">
      <h2 className="font-heading px-10">Home</h2>
      <div className="columns-3 gap-8 font-serif text-2xl p-10">
        {overlayText}
      </div>
    </div>
  )
}

export function AboutOverlay() {
  return (
    <div className="m-10 p-4 leading-normal text-black-400 text-3xl z-20">
      <h2 className="font-heading px-10">About</h2>
      <div className="columns-3 gap-8 text-2xl font-serif p-10">
        {overlayText}
      </div>
    </div>
  )
}

export function DashboardOverlay() {
  return (
    <div className="m-10 p-4 leading-normal text-black-400 text-3xl z-20">
      <h2 className="font-heading px-10">Dashboard</h2>
      <div className="columns-3 gap-8 font-serif text-2xl p-10">
        {overlayText}
      </div>
    </div>
  )
}

export function ErrorOverlay() {
  return (
    <div className="m-10 p-4 leading-normal text-black-400 text-3xl">
      <h2 className="font-heading px-10">Nothing to see here!</h2>
      <p className="font-serif text-2xl px-10">
        <Link to="/">Go to the home page</Link>
      </p>

      <div className="columns-3 gap-8 font-serif text-2xl p-10">
        {overlayText}
      </div>
    </div>
  )
}
