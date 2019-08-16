export function Thing({
  vertices = [[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]],
}) {
  return (
    <mesh
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}
    >
      <octahedronGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        color="#FFF2FA"
        opacity={0.5}
        transparent
      />
    </mesh>
  );
}
