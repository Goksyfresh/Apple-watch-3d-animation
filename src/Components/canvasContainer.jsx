import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import Watch from '../../public/Watch'

function CanvasContainer() {
  return (
    <Canvas camera = {{position:[
        
        3.6787124871360675, 
        1.7511832589012926,
        2.898349811657138]}}>
      <ambientLight intensity={2.5} />
      <OrbitControls enableZoom={false}/>
      <Suspense fallback={null}>
        <Watch/>
      </Suspense>
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.5}
        scale={50}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />
    </Canvas>
  );
}
export default CanvasContainer;
