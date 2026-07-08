import PropTypes from 'prop-types';
import './Info.scss';

/**
 * Simple text wrapper adding consistent internal spacing/typography.
 * Can be used standalone or nested inside other components.
 */
function Info({ title, text, className = '' }) {
  return (
    <div className={`info ${className}`.trim()}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Info;
