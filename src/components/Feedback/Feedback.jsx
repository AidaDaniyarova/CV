import PropTypes from 'prop-types';
import './Feedback.scss';

/**
 * Renders a list of testimonials/feedback quotes.
 */
function Feedback({ data }) {
  if (data.length === 0) {
    return <p className="feedback__empty">No feedback yet — check back soon.</p>;
  }

  return (
    <ul className="feedback">
      {data.map(({ feedback, reporter }) => (
        <li key={reporter.name} className="feedback__item">
          <blockquote className="feedback__quote">
            <div className="info">
              <h3 />
              <p>
                {feedback}{" "}
              </p>
            </div>
          <div className="feedback__reporter">
            <img className="feedback__reporter__photo" src={reporter.photoUrl} alt={reporter.name} />
            <cite className="feedback__reporter__cite">
              {reporter.name}, <a href={reporter.citeUrl} target="_blank" rel="noreferrer">
                {reporter.citeUrl.replace('https://', '').replace('http://', '') || 'source'}
              </a>
            </cite>
            
          </div>
          </blockquote>
        </li>
      ))}
    </ul>
  );
}

Feedback.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      feedback: PropTypes.string.isRequired,
      reporter: PropTypes.shape({
        photoUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        citeUrl: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

export default Feedback;
