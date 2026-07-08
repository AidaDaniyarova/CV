import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGraduationCap,
  faPen,
  faGem,
  faBriefcase,
  faLocationArrow,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';

// Navigation items are hardcoded inside the component, as recommended.
const NAV_ITEMS = [
  { id: 'about', label: 'About me', icon: faUser },
  { id: 'education', label: 'Education', icon: faGraduationCap },
  { id: 'experience', label: 'Experience', icon: faPen },
  { id: 'skills', label: 'Skills', icon: faGem },
  { id: 'portfolio', label: 'Portfolio', icon: faBriefcase },
  { id: 'contacts', label: 'Contacts', icon: faLocationArrow },
  { id: 'feedback', label: 'Feedback', icon: faComment },
];

/**
 * Main section navigation. Supports an active state and can be controlled
 * externally (e.g. reset by the back-to-top button). Labels are hidden by
 * CSS alone below 600px, leaving an icon-only rail.
 */
function Navigation({ onNavigate, activeId: controlledActiveId }) {
  const [internalActiveId, setInternalActiveId] = useState('about');
  const activeId = controlledActiveId !== undefined ? controlledActiveId : internalActiveId;

  const handleClick = (id) => {
    setInternalActiveId(id);
    onNavigate?.(id);
  };

  return (
    <ul className="navigation">
      {NAV_ITEMS.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={activeId === item.id ? 'active' : ''}
            onClick={() => handleClick(item.id)}
          >
            <span className="icon">
              <FontAwesomeIcon icon={item.icon} />
            </span>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

Navigation.propTypes = {
  onNavigate: PropTypes.func,
  activeId: PropTypes.string,
};

export default Navigation;
export { NAV_ITEMS };