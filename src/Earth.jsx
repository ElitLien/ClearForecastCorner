import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./earth/earth.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={2.5}
      />
    </group>
  );
}

useGLTF.preload("./earth/earth.gltf");
