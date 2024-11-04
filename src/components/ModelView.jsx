/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import IPhone from "./iPhone";
import { Suspense } from "react";
import * as THREE from "three";
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={` w-full h-full ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.5} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls ref={controlRef} makeDefault enableZoom={false} enablePan={false} rotateSpeed={0.4} target={new THREE}/>
      <group ref={groupRef} name={`${index === 1 ? "small" : "large"}`}>
        <Suspense fallback={<div>Loading</div>}>
          <IPhone />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
