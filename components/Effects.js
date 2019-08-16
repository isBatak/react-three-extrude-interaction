import { extend, useRender, useThree } from 'react-three-fiber';
import { useRef, useEffect } from 'react';

import { EffectComposer } from '../resources/postprocessing/EffectComponser';
import { RenderPass } from '../resources/postprocessing/RenderPass';
import { GlitchPass } from '../resources/postprocessing/GlitchPass';

// Makes these objects available as native objects "<renderPass />" and so on
extend({ EffectComposer, RenderPass, GlitchPass });

export const Effects = ({ factor }) => {
  const { gl, scene, camera, size } = useThree();
  const composer = useRef();
  useEffect(() => void composer.current.setSize(size.width, size.height), [
    size,
  ]);

  // This takes over as the main render-loop (when 2nd arg is set to true)
  useRender(() => composer.current.render(), true);
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <glitchPass attachArray="passes" factor={factor} renderToScreen />
    </effectComposer>
  );
};
