import React from "react";

// props
const Sphere = ({ color, position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry />
      <meshStandardMaterial color={color} wireframe/>
    </mesh>
  )
}

export default Sphere