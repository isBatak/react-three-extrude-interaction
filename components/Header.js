import { Canvas } from 'react-three-fiber';

import { Glyphs } from './Glyphs';
import { Camera } from './Camera';
import { Plane } from './Plane';
import { PCFSoftShadowMap, REVISION } from 'three';
import { Controls } from './Controls';
import { Lights } from './Lights';

console.log('revision', REVISION);

export const Header = () => {
  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = PCFSoftShadowMap;
        gl.gammaInput = true;
        gl.gammaOutput = true;
      }}
    >
      <Camera />
      {/* <Controls /> */}
      <Lights />
      <Glyphs color="#FFFFFF" />
      <Plane color="#FFFFFF" />
      {/* <Thing /> */}
    </Canvas>
  );
};
