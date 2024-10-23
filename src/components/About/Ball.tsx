"use client";

import { Decal } from "@react-three/drei/core/Decal";
import { Float } from "@react-three/drei/core/Float";
import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { Preload } from "@react-three/drei/core/Preload";
import { useTexture } from "@react-three/drei/core/Texture";
import { Canvas } from "@react-three/fiber/dist/declarations/src/web/Canvas";
import { Suspense } from "react";

import CanvasLoader from "../canvas/Loader";

const Ball = (props: { imgUrl: string }) => {
  const [decal] = useTexture([`/images/tech-icons/${props.imgUrl}.png`]);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={3}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 5]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.75}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
