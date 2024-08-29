import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import Snake from '../../assets/cartoon_snake.png'
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
            p="A simplified version of the classic game 'Tetris' created with Python."
        />
        <ProjectCard 
            src={Snake} 
            link="https://github.com/Jameshuff95/retro_snake_game"
            h3="Classic-style Snake" 
            p="A collaboration of classic and retro-style Snake game created with Python, specifically the Pygame library.PyGame."
        />
        <ProjectCard 
            src={Hipster} 
            link="https://github.com/Jameshuff95/celestial-bodies-database-PostgreSQL"
            h3="PostgreSQL Database" 
            p="A PostgreSQL database of celestial bodies."
        />
        <ProjectCard 
            src={FitLift} 
            link="https://github.com/Jameshuff95/Quiz-Game"
            h3="Quiz Game" 
            p="A quiz app created with HTML, CSS and vanilla Javascript."
        />
      </div>
    </section>
  )
}

export default Projects
