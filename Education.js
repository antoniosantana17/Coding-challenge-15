import React from 'react';
import styles from './Education.module.css';  // Import CSS module

const Education = ({ education }) => (
  <section className={styles.education}>
    <h2>Education</h2>
    {education.map(edu => (
      <div key={edu.id}>
        <h3>{edu.degree}</h3>
        <p>{edu.institution} - {edu.years}</p>
      </div>
    ))}
  </section>
);

export default Education;
