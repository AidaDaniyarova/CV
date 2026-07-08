import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import PhotoBox from '../PhotoBox/PhotoBox';
import './Panel.scss';

/**
 * Side panel containing the personal photo box, the main navigation,
 * and a "Go back" link to the start page. Can be shown/hidden via the
 * hamburger toggle to free up working space (desktop) or act as an
 * off-canvas drawer (mobile).
 */
function Panel({ owner, activeId, onNavigate }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <Button className={`panel__toggle ${
          isOpen ? 'panel__toggle--open' : 'panel__toggle--closed'
        }`}
        variant="icon-only"
        icon={
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className={`panel__toggle-icon ${isOpen ? 'open' : ''}`}
          />
        }
        onClick={toggle}
      />
      <aside className={`panel ${isOpen ? 'panel--open' : 'panel--closed'}`} aria-label="Profile and navigation">
        <PhotoBox
          name={owner.name}
          title={owner.title}
          description={owner.description}
          avatar={owner.avatar}
        />
        <Navigation activeId={activeId} onNavigate={onNavigate} />
        <Link to="/" className="panel__go-back">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Go back</span>
        </Link>
      </aside>
    </>
  );
}

Panel.propTypes = {
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  activeId: PropTypes.string,
  onNavigate: PropTypes.func,
};

export default Panel;
