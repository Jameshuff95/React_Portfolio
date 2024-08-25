import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import FreshBurger from '../../assets/fresh-burger.png'
import Hipster from '../../assets/hipsster.png'
import FitLift from '../../assets/fitlift.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
            src={viberr} 
            link="https://github.com/Jameshuff95/simplified_tetris"
            h3="Viberr" 
            p="Test"
        />
        <ProjectCard 
            src={FreshBurger} 
            link="https://github.com/Jameshuff95/simplified_tetris"
            h3="FreshBurger" 
            p="Test2"
        />
        <ProjectCard 
            src={Hipster} 
            link="https://github.com/Jameshuff95/simplified_tetris"
            h3="Hipster" 
            p="Test3"
        />
        <ProjectCard 
            src={FitLift} 
            link="https://github.com/Jameshuff95/simplified_tetris"
            h3="FitLift" 
            p="Test4"
        />
      </div>
    </section>
  )
}

export default Projects
