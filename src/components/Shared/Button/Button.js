import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Import the external CSS file

const Button = ({ onClick, children, type = 'button', style = {}, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style} // Inline styles can still be passed as props
      className={`custom-button ${className}`} // Add the default class
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Button;