import ThreeScene from "./components/ThreeScene";
import Sphere from "./components/Sphere";
// threejs
import { OrbitControls, Stars } from '@react-three/drei'

function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <ThreeScene>
        <color attach="background" args={['#161c24']} />
        <Sphere color="#00ff00" position={[-2, 0, 0]} />
        <Sphere color="#ff0000" position={[2, 0, 0]} />
        <ambientLight />
        <OrbitControls autoRotate/>
        <Stars count={1000}/>
      </ThreeScene>
    </div>
  );
}

export default App;
