import PropTypes from 'prop-types';
import './Button.scss';

/**
 * Reusable button component.
 * Can render icon-only, text-only, or icon + text.
 */
function Button({ icon, text, onClick, type = 'button', variant = 'primary', disabled = false, className = '' }) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {text && <span className="btn__text">{text}</span>}
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'accent', 'ghost', 'icon-only']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
