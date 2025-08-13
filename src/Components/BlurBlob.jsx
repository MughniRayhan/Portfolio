import React from 'react';
import PropTypes from 'prop-types';

function BlurBlob({ position, size, colors }) {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`w-full h-full rounded-full blur-3xl opacity-40 animate-blob mix-blend-screen`}
        style={{
          background: `radial-gradient(circle at center, ${colors[0]}, ${colors[1]})`,
        }}
      ></div>
    </div>
  );
}

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  colors: PropTypes.arrayOf(PropTypes.string), // Array of 2 colors
};

BlurBlob.defaultProps = {
  colors: ['#9333ea', '#3b82f6'], // default purple-blue gradient
};

export default BlurBlob;
