import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

const App = () => {
  const skills = [
    { id: 1, name: 'JavaScript', level: 'Intermediate' },
    { id: 2, name: 'React', level: 'Beginner' },
    { id: 3, name: 'CSS', level: 'Advanced' },
  ];

  const experiences = [
    { id: 1, title: 'Software Developer', company: 'Tech Solutions', duration: 'Jan 2020 - Present' },
    { id: 2, title: 'Web Developer Intern', company: 'WebWorks', duration: 'Jun 2019 - Dec 2019' },
  ];

  const education = [
    { id: 1, institution: 'State University', degree: 'B.S. Computer Science', years: '2016 - 2020' },
  ];

  return (
    <div className="App">
      <PersonalInfo />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Education education={education} />
    </div>
  );
}

export default App;
