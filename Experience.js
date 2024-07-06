import React from 'react';
import styles from './Experience.module.css';  // Import CSS module

const Experience = ({ experiences }) => (
  <section className={styles.experience}>
    <h2>Experience</h2>
    {experiences.map(exp => (
      <div key={exp.id}>
        <h3>{exp.title} at {exp.company}</h3>
        <p>{exp.duration}</p>
      </div>
    ))}
  </section>
);

export default Experience;
