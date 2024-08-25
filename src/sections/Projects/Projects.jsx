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
            h3="Tetris Project" 
            p="A simplified version of the classic game 'Tetris'."
        />
        <ProjectCard 
            src={FreshBurger} 
            link="https://github.com/Jameshuff95/simplified_tetris"
            h3="Project Two" 
            p=" Project two text."
        />
        <ProjectCard 
            src={Hipster} 
            link="https://github.com/Jameshuff95/simplified_tetris"
            h3="Project Three" 
            p="Project three text."
        />
        <ProjectCard 
            src={FitLift} 
            link="https://github.com/Jameshuff95/simplified_tetris"
            h3="Project Four" 
            p="Project four text."
        />
      </div>
    </section>
  )
}

export default Projects
