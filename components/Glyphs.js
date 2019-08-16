import { useState, useCallback } from 'react';
import { FontLoader } from 'three';
import { useThree } from 'react-three-fiber';

import { Glyph } from './Glyph';

// font converted with https://gero3.github.io/facetype.js/
import fontFile from '../resources/fonts/pingfang-sc-aemibold.typeface.json';

export const Glyphs = ({ size = 1, gap = 0.5, color = '#000000' }) => {
  const [font] = useState(() => new FontLoader().parse(fontFile));

  const lettersGrid = [
    ['b', 'd', 'e', 'f', 'k', 'l', 'n'],
    ['d', 'n', 'f', 'e', 'b', 'l', 'k'],
    ['k', 'b', 'n', 'f', 'd', 'e', 'l'],
    ['l', 'k', 'f', 'e', 'b', 'd', 'n'],
  ];

  const [z, setZ] = useState(0);

  console.log(z);

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
            z={z}
            color={color}
            size={size}
            castShadow
            receiveShadow
            onPointerOver={() => setZ(1)}
            onPointerOut={() => setZ(-0.1)}
          />
        )),
      )}
    </group>
  );
};
