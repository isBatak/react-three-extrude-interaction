import { Canvas } from 'react-three-fiber';

import { Glyphs } from './Glyphs';
import { Camera } from './Camera';
import { Plane } from './Plane';
import { PCFSoftShadowMap, REVISION, Euler } from 'three';
import { Controls } from './Controls';
import { Lights } from './Lights';

export const Header = () => {
  return (
    <Canvas
      camera={{
        position: [3, -3, 3],
        rotation: new Euler(0.5, 0.3, -0.4, 'XYZ'),
      }}
      onCreated={({ gl, camera }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = PCFSoftShadowMap;
        gl.gammaOutput = true;
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.6}
        position={[30, 30, 50]}
        angle={0.2}
        penumbra={1}
        castShadow
      />
      {/* <Camera /> */}
      {/* <Controls /> */}
      {/* <Lights /> */}
      <Glyphs
        color="#FFFFFF"
        lettersGrid={[
          ['b', 'd', 'e', 'f', 'k', 'l', 'n'],
          ['d', 'n', 'f', 'e', 'b', 'l', 'k'],
          ['k', 'b', 'n', 'f', 'd', 'e', 'l'],
          ['l', 'k', 'f', 'e', 'b', 'd', 'n'],
        ]}
      />
      <Plane color="#FFFFFF" />
      {/* <Thing /> */}
    </Canvas>
  );
};
