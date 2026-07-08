import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { fetchEducations } from '../../features/education/educationSlice';
import Panel from '../../components/Panel/Panel';
import Box from '../../components/Box/Box';
import Info from '../../components/Info/Info';
import TimeLine from '../../components/TimeLine/TimeLine';
import Expertise from '../../components/Expertise/Expertise';
import Skills from '../../components/Skills/Skills';
import Portfolio from '../../components/Portfolio/Portfolio';
import Address from '../../components/Address/Address';
import Feedback from '../../components/Feedback/Feedback';
import Button from '../../components/Button/Button';
import {
  owner,
  aboutText,
  educationData,
  experienceData,
  skillsData,
  feedbackData,
  contact,
  socialLinks,
} from '../../data/resumeData';
import './Inner.scss';

const Inner = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.education);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [activeId, setActiveId] = useState('about');
  
    const handleBackToTop = () => {
      setActiveId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  useEffect(() => {
    dispatch(fetchEducations());
  }, [dispatch]);

  let educationContent;

  if (status === 'loading') {
    educationContent = (
      <div className="loading-container">
        <FontAwesomeIcon className="icon spin" icon={faSyncAlt} />
      </div>
    );
  } else if (status === 'failed') {
    educationContent = (
      <div className="error-container">
        Something went wrong; please review your server connection!
      </div>
    );
  } else if (status === 'succeeded') {
    educationContent = <TimeLine data={items} />;
  }

  return (
      <div className="inner">
        <Panel owner={owner} activeId={activeId} onNavigate={setActiveId} />
  
        <main className="inner__content">
          <section id="about" className="inner__section">
            <Box title="About me">
              <Info text={aboutText} />
            </Box>
          </section>
  
          <section id="education" className="inner__section">
            <Box title="Education">
              <TimeLine data={educationData} />
            </Box>
          </section>
  
          <section id="experience" className="inner__section">
            <Box title="Experience">
              <Expertise data={experienceData} />
            </Box>
          </section>
  
          <section id="skills" className="inner__section">
            <Box title="Skills"
              action={
                <Button
                  className='btn-edit'
                  text={isEditingSkills ? "Close Edit" : "Open Edit"}
                  icon={<FontAwesomeIcon icon={faPenToSquare} />}
                  onClick={() => setIsEditingSkills(!isEditingSkills)}
                />
              }
            >
              <Skills data={skillsData} isEditing={isEditingSkills} />
            </Box>
          </section>
  
          <section id="portfolio" className="inner__section">
            <Box title="Portfolio">
              <Portfolio />
            </Box>
          </section>
  
          <section id="contacts" className="inner__section">
            <Box title="Contacts">
              <Address
                email={contact.email}
                phone={contact.phone}
                location={contact.location}
                social={socialLinks}
              />
            </Box>
          </section>
  
          <section id="feedback" className="inner__section">
            <Box title="Feedback">
              <Feedback data={feedbackData} />
            </Box>
          </section>
        </main>
  
        <Button
          className="inner__back-to-top"
          variant="icon-only"
          icon={<FontAwesomeIcon icon={faChevronUp} />}
          onClick={handleBackToTop}
        />
      </div>
    );
};
export default Inner;