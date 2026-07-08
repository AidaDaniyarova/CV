import PropTypes from 'prop-types';
import './Box.scss';

const Box = ({ title, content, children, action }) => {
  return (
    <div className="info-box">
      <div className="info-box__header">
        <h2>{title}</h2>
        {action}
      </div>

      {content && <p>{content}</p>}

      {children}
    </div>
  );
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  children: PropTypes.node,
  action: PropTypes.node,
};

export default Box;