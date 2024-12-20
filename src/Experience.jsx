import { OrbitControls, RoundedBox, useTexture } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Experience() {
  const normalMap = useTexture("./textures/waternormals.jpeg")
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
      <OrbitControls />

      <RoundedBox
        radius={0.01}
        className="z-40"
        position={[0, 0, 0]}
        rotation={[Math.PI / 4, Math.PI / 4, 0]}
      >
        <meshStandardMaterial
          metalness={1}
          roughness={0.12}
          normalMap={normalMap}
        />
      </RoundedBox>

      {/* Cube behind text */}
      <mesh
        ref={cube1Ref}
        position={[-2, 0, 0]}
        rotation-y={Math.PI / 2}
        className="z-10"
      >
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Cube in front of text */}
      <mesh
        ref={cube2Ref}
        position={[2, 0, 0]}
        className="z-30"
        rotation-y={Math.PI / 4}
      >
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  )
}
