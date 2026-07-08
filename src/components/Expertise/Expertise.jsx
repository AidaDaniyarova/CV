import PropTypes from 'prop-types';
import './Expertise.scss';

/**
 * Renders a list of work-experience entries.
 * Data is passed in dynamically via the `data` prop.
 */
function Expertise({ data }) {
  return (
    <ul className="expertise-list">
      {data.map(({ date, info }) => (
        <li key={`${info.company}-${date}`} className="expertise-list-item">
          <div className="expertise-list-date">
            <h3>{info.company}</h3>
            <span className="date">{date}</span>
          </div>
          <div className="expertise-list-info">
            <h3>{info.job}</h3>
            <p>{info.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

Expertise.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      info: PropTypes.shape({
        company: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default Expertise;
