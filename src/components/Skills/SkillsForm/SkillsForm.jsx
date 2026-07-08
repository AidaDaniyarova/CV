import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  addNewSkill,
  addSkillOptimistic,
} from '../../../features/skills/skillsSlice';

import Button from '../../Button/Button';
import './SkillsForm.scss';

const SkillsForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      range: '',
    },

    validationSchema: Yup.object({ name: Yup.string() 
      .min(3, 'Must be at least 3 characters') 
      .max(20, 'Must be 20 characters or less') 
      .required('Skill name is required'), 
      range: Yup.number() 
      .min(10, 'Range must be at least 10') 
      .max(100, 'Range cannot exceed 100') 
      .required('Skill range is required'), }),

    onSubmit: async (values, { resetForm }) => {
      const skill = {
        id: Date.now(), // temporary id
        name: values.name,
        range: Number(values.range),
      };

      // Instantly update the UI
      dispatch(addSkillOptimistic(skill));

      // Save in the background
      dispatch(addNewSkill(skill));

      resetForm();
    },
  });

  return (
    <form className="skills-form" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Skill name:</label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter skill name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="range">Skill range:</label>

        <input
          id="range"
          name="range"
          type="number"
          placeholder="Enter skill range"
          value={formik.values.range}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.range && formik.errors.range && (
          <div className="error">{formik.errors.range}</div>
        )}
      </div>

      <Button
        type="submit"
        text="Add skill"
        disabled={!formik.isValid || !formik.dirty}
      />
    </form>
  );
};

export default SkillsForm;