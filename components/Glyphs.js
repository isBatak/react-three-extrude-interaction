import { useState, useCallback } from 'react';
import { FontLoader } from 'three';
import { useSpring } from 'react-spring-three';

import { Glyph } from './Glyph';

// font converted with https://gero3.github.io/facetype.js/
import fontFile from '../resources/fonts/pingfang-sc-aemibold.typeface.json';

export const Glyphs = ({
  size = 1,
  gap = 0.5,
  color = '#000000',
  depth = 1,
}) => {
  const [font] = useState(() => new FontLoader().parse(fontFile));

  const lettersGrid = [
    ['b', 'd', 'e', 'f', 'k', 'l', 'n'],
    ['d', 'n', 'f', 'e', 'b', 'l', 'k'],
    ['k', 'b', 'n', 'f', 'd', 'e', 'l'],
    ['l', 'k', 'f', 'e', 'b', 'd', 'n'],
  ];

  const [z, setZ] = useState(0.2);
  const props = useSpring({
    z: z - depth,
  });

  return (
    <group>
      {lettersGrid.map((row, rowIndex) =>
        row.map((letter, letterIndex) => (
          <Glyph
            key={rowIndex + letter}
            font={font}
            letter={letter}
            x={
              letterIndex * size +
              letterIndex * gap +
              (-row.length / 2) * (size + gap)
            }
            y={
              rowIndex * size +
              rowIndex * gap +
              (-lettersGrid.length / 2) * (size + gap)
            }
            z={props.z}
            color={color}
            size={size}
            depth={depth}
            castShadow
            receiveShadow
            onPointerOver={() => setZ(0.5)}
            onPointerOut={() => setZ(0.2)}
          />
        )),
      )}
    </group>
  );
};
