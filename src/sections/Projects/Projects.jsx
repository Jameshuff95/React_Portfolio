import React from 'react'
import styles from './ProjectsStyles.module.css'
import Weather from '../../assets/weather_calm'
import Tetris from '../../assets/tetris.png'
import ProjectCard from '../../common/ProjectCard'
import Snake from '../../assets/cartoon_snake.png'
import PostgreSQL from '../../assets/postgres.png'
import FitLift from '../../assets/fitlift.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
            src={Weather} 
            link="https://github.com/Jameshuff95/simplified_tetris"
            h3="Weather App" 
            p="An online weather app written with React.js & SCSS: deployed with Netlify."
        />
        <ProjectCard 
            src={Tetris} 
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
            src={PostgreSQL} 
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
