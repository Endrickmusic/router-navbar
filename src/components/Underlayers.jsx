import { underlayText } from "./text.jsx"

export function HomeUnderlayer() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-200 to-pink-200">
      <div className="flex items-center justify-center h-full">
        <div className="text-9xl text-red-600">{underlayText}</div>
      </div>
    </div>
  )
}

export function AboutUnderlayer() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-purple-200 to-orange-200">
      <div className="flex items-center justify-center h-full">
        <div className="text-9xl text-red-600">{underlayText}</div>
      </div>
    </div>
  )
}

export function DashboardUnderlayer() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-green-200 to-yellow-200">
      <div className="flex items-center justify-center h-full">
        <div className="text-9xl text-red-600">{underlayText}</div>
      </div>
    </div>
  )
}

export function ErrorUnderlayer() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-red-200 to-gray-200">
      <div className="flex items-center justify-center h-full">
        <div className="text-9xl text-red-600">{underlayText}</div>
      </div>
    </div>
  )
}
