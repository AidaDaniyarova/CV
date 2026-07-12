import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkills } from '../../features/skills/skillsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import SkillsForm from './SkillsForm/SkillsForm';
import './Skills.scss';
import Button from '../Button/Button';

const Skills  = ({ isEditing, setIsEditing }) => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  return (<>
      {isEditing && (
        <SkillsForm onClose={() => setIsEditing(false)} />
      )}

      <div className="skills-chart">
        {status === 'loading' && <p>Loading skills...</p>}
        {items.map((skill, idx) => (
          <div key={idx} className="skill-bar">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-track">
              <div className="skill-fill" style={{ width: `${skill.range}%` }}>
                <span className="skill-range"></span>
              </div>
            </div>
          </div>
        ))}
          
      </div>
      <div className="skills__scale">
        <div className="skills__line">
          <span className="tick tick-1"></span>
          <span className="tick tick-2"></span>
          <span className="tick tick-3"></span>
          <span className="tick tick-4"></span>
        </div>

        <div className="skills__labels">
          <span>Beginner</span>
          <span>Proficient</span>
          <span>Expert</span>
          <span>Master</span>
        </div>
      </div>
      </>
  );
};
export default Skills;