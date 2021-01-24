import "./styles.css";
import React from 'react'
import { Canvas } from "react-three-fiber"

//const SkyBox =()=> 

const Sphere =()=> 
<mesh 
  visible position={[0,0,0]} 
  rotation={[0,0,0]}
  castShadow>

  <sphereGeometry 
    attach='geometry' 
    args={[2,32,32]}/>
  <meshBasicMaterial
    attach='material'
    color='red'
    roughness={0.1}
    metalness={1}/>

</mesh>


export default function App() {
  return (
    <Canvas>
      <Sphere/>
    </Canvas>
  );
}
