import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import './TimeLine.scss';

export const TimeLine = ({ data, status, error }) => {
  if (status === 'loading') {
    return (
      <div className="timeline-loader" data-testid="loader">
        <FontAwesomeIcon icon={faSyncAlt} className="icon" />
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="timeline-error">
        Something went wrong; please review your server connection!
      </div>
    );
  }

  return (
    <div className="timeline">
      <div className="spinner">
        <i className="fa fa-refresh fa-3x" />
      </div>
      <ul className="timeline-list">
        {data.map((event, index) => (
          <li key={index}>
            <div className="timeline-date">{event.date}</div>
            <div className="general-event timeline-event">
              <div className="info">
                <h3>{event.title}</h3>
                <p>{event.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;