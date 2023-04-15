import { OrbitControls } from "@react-three/drei";
import { useHelper } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Sphere from "./Sphere";
import Floor from "./Floor";
import { useRef } from "react";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  PointLightHelper,
  RectAreaLightHelper,
  SpotLightHelper,
} from "three";

export default function Experience() {
  const directionalLightRef = useRef();
  const hemisphereLightRef = useRef();
  const pointLightRef = useRef();
  const rectAreaLightRef = useRef();
  const spotLightRef = useRef();

  useHelper(directionalLightRef, DirectionalLightHelper, 1);
  useHelper(hemisphereLightRef, HemisphereLightHelper, 1);
  useHelper(pointLightRef, PointLightHelper, 1);
  // useHelper(rectAreaLightRef, RectAreaLightHelper, 1)
  useHelper(spotLightRef, SpotLightHelper, 1);

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <spotLight
        ref={spotLightRef}
        position={[0, 10, -6]}
        intensity={1.5}
        angle={Math.PI / 4}
        penumbra={0.05}
        castShadow={true}
      />
      <ambientLight intensity={0.5} />
      {/* <hemisphereLight ref={hemisphereLightRef} position={[0, 10, 0]} intensity={0.5} />
        <pointLight ref={pointLightRef} position={[0, 3, 0]} intensity={1} />
        <rectAreaLight ref={rectAreaLightRef} position={[0, 5, 0]} width={4} height={4} intensity={1} /> */}
      <Sphere />
      <Floor />
    </>
  );
}
