import PropTypes from 'prop-types';
import './PhotoBox.scss';

/**
 * Displays the CV owner's avatar plus name/title/description.
 * Renders as "View 1" (full, panel open) or "View 2" (compact, panel collapsed)
 * depending on the `compact` prop.
 */
function PhotoBox({ name, title, description, avatar, compact = false }) {
  return (
    <div className={`photo-box ${compact ? 'photo-box--compact' : ''}`}>
      <img className="photo-box__avatar" src={avatar} alt={name} />
      <div className="photo-box__details">
        <h2 className="photo-box__name">{name}</h2>
        {!compact && title && <p className="photo-box__title">{title}</p>}
        {!compact && description && <p className="photo-box__description">{description}</p>}
      </div>
    </div>
  );
}

PhotoBox.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  compact: PropTypes.bool,
};

export default PhotoBox;
