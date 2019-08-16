import { useRef, useEffect } from 'react';
import { useThree } from 'react-three-fiber';
import { Vector3, Euler } from 'three';

export const Camera = () => {
  const camera = useRef();
  const { size, setDefaultCamera } = useThree();
  useEffect(() => setDefaultCamera(camera.current), [setDefaultCamera]);

  return (
    <orthographicCamera
      ref={camera}
      left={size.width / -2}
      right={size.width / 2}
      top={size.height / 2}
      bottom={size.height / -2}
      near={-1000}
      far={1000}
      position={new Vector3(0, 0, 0)}
      rotation={new Euler(0, 0, 0)}
      zoom={70}
      onUpdate={camera => {
        console.log(camera);
        camera.updateProjectionMatrix();
      }}
    />
  );
};
