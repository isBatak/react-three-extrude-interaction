import { useRef, useEffect } from 'react';
import { useThree } from 'react-three-fiber';

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
      near={0.1}
      far={1000}
      position={[0, 0, 0.3]}
      onUpdate={self => self.updateProjectionMatrix()}
    />
  );
};
