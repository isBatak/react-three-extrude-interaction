export const Glyph = ({
  font,
  letter,
  x = 0,
  y = 0,
  z = 0,
  color,
  size,
  ...rest
}) => {
  return (
    <mesh
      position-x={x}
      position-y={y}
      position-z={z}
      castShadow
      receiveShadow
      {...rest}
    >
      <extrudeGeometry
        attach="geometry"
        args={[
          font.generateShapes(letter, size, 1),
          {
            steps: 1,
            depth: 0.1,
            bevelEnabled: false,
          },
        ]}
      />
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  );
};
