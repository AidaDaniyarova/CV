import { useState } from 'react';
import { portfolioData } from '../../data/resumeData';
import './Portfolio.scss';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems =
    filter === 'all'
      ? portfolioData
      : portfolioData.filter(item => item.category === filter);

  return (
    <div className="portfolio">

      <ul className="tabs">
        <li
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          <span>All</span>
        </li>

        <li
          className={filter === 'ai' ? 'active' : ''}
          onClick={() => setFilter('ai')}
        >
          <span>AI</span>
        </li>

        <li
          className={filter === 'backend' ? 'active' : ''}
          onClick={() => setFilter('backend')}
        >
          <span>Backend</span>
        </li>

        <li
          className={filter === 'fullstack' ? 'active' : ''}
          onClick={() => setFilter('fullstack')}
        >
          <span>Full Stack</span>
        </li>
      </ul>

      <ul className="filter-container">
        {filteredItems.map((item) => (
          <li key={item.id} className="portfolio-card">

            <img
              src={item.image}
              alt={item.title}
              className="portfolio-card__image"
            />

            <div className="portfolio-info">
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>

          </li>
        ))}
      </ul>

    </div>
  );
};

export default Portfolio;