import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { owner, heroTagline } from '../../data/resumeData';
import './Home.scss';

/**
 * The Start Page: full-viewport hero with a scalable cover background,
 * a circular avatar, the owner's name/title, and a call-to-action into
 * the inner CV page.
 */
function Home() {
  return (
    <main className="home">
      <div className="home__overlay" />
      <div className="home__content">
        <img className="home__avatar" src={owner.avatar} alt={owner.name} />
        <h1 className="home__name">{owner.name}</h1>
        <p className="home__title">{owner.title}</p>
        <p className="home__tagline">{heroTagline}</p>
        <Link to="/inner">
          <Button text="Know more" />
        </Link>
      </div>
    </main>
  );
}

export default Home;
