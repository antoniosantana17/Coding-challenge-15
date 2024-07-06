import React from 'react';
import styles from './Skills.module.css';  // Import CSS module

const Skills = ({ skills }) => (
  <section className={styles.skills}>
    <h2>Skills</h2>
    <ul>
      {skills.map(skill => (
        <li key={skill.id}>{skill.name} - {skill.level}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
