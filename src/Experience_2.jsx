import { OrbitControls, RoundedBox, useTexture } from "@react-three/drei"
import {} from "@react-three/fiber"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Experience2() {
  const cube1Ref = useRef()
  const cube2Ref = useRef()

  useFrame((state, delta) => {
    if (cube1Ref.current) {
      cube1Ref.current.rotation.x += delta
      cube1Ref.current.rotation.y += delta
    }
    if (cube2Ref.current) {
      cube2Ref.current.rotation.x -= delta
      cube2Ref.current.rotation.y -= delta
    }
  })

  return (
    <>
      {/* Cube behind text */}
      <mesh ref={cube1Ref} position={[-1, 0, 1]} className="z-10">
        <boxGeometry />
        <meshStandardMaterial color="purple" />
      </mesh>

      {/* Cube in front of text */}
      <mesh ref={cube2Ref} position={[1, 0, -1]} className="z-30">
        <boxGeometry />
        <meshStandardMaterial color="teal" />
      </mesh>
    </>
  )
}
