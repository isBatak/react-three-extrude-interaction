import { Canvas } from 'react-three-fiber';

import { Glyphs } from './Glyphs';
import { Camera } from './Camera';
import { Plane } from './Plane';
import { PCFSoftShadowMap, REVISION } from 'three';
import { Controls } from './Controls';

console.log('revision', REVISION);

export const Header = () => {
  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = PCFSoftShadowMap;
      }}
    >
      <Camera />
      <Controls />
      <ambientLight intensity={0.5} color="#FFF1FA" />
      <spotLight
        intensity={0.6}
        position={[30, 30, 50]}
        angle={0.2}
        penumbra={1}
        color="#FFF1FA"
        castShadow
      />
      <Glyphs color="#FFFFFF" />
      <Plane color="#FFFFFF" />
      {/* <Thing /> */}
    </Canvas>
  );
};
