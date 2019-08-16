import { useResource } from 'react-three-fiber';

export const Lights = () => {
  const [spotlightRef, spotLight] = useResource();
  const [hemisphereRef, hemisphereLight] = useResource();

  return (
    <>
      {/* <ambientLight intensity={0.5} color="#FFF1FA" /> */}
      <hemisphereLight
        ref={hemisphereRef}
        skyColor="#ffffbb"
        groundColor="#080820"
        intensity={0.5}
        position={[0, 0, 50]}
      />
      <spotLight
        ref={spotlightRef}
        intensity={0.6}
        position={[-30, 30.75, 30]}
        angle={0.2}
        penumbra={1}
        color="#FFF1FA"
        castShadow
      />
      {spotLight && <spotLightHelper args={[spotLight, 'yellow']} />}
      {hemisphereLight && (
        <hemisphereLightHelper args={[hemisphereLight, 10, 'yellow']} />
      )}
    </>
  );
};
