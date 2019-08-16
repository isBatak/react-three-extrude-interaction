import { useRef } from 'react';
import { useThree, useRender, extend } from 'react-three-fiber';
import { OrbitControls } from '../resources/controls/OrbitControls';

extend({ OrbitControls });

export const Controls = () => {
  const controls = useRef();
  const { camera, gl } = useThree();
  useRender(() => controls.current.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.5}
    />
  );
};
