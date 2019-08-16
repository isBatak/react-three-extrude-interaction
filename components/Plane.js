export const Plane = ({ width = 1000, height = 1000, color = '#FFFFFF' }) => {
  return (
    <mesh receiveShadow>
      <planeBufferGeometry attach="geometry" args={[width, height]} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  );
};
