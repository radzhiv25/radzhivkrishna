'use client';
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import PropTypes from 'prop-types';
import { cn } from '../lib/utils';

const Globe = ({
  className,
}) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();
    let phi = 0;
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 0.8,
      scale: 1.1,
      diffuse: 1.2,
      mapSamples: 40000,
      mapBrightness: 3,
      baseColor: [0.5, 0.5, 0.5],
      markerColor: [0.8, 0.8, 0.8],
      glowColor: [0.7, 0.7, 0.7],
      opacity: 1,
      offset: [0, 0],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });
    return () => {
      globe.destroy();
    };
  }, []);
  return (
    <div
      className={cn(
        'flex items-center justify-center z-[10] w-full max-w-[350px] mx-auto',
        className
      )}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          aspectRatio: '1',
        }}
      />
    </div>
  );
};

Globe.propTypes = {
  className: PropTypes.string,
};

export default Globe;
