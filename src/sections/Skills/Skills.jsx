import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from './SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="Javascript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Vite + React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Github" />
        <SkillList src={checkMarkIcon} skill="Bootsrap" />
        <SkillList src={checkMarkIcon} skill="Example" />
        <SkillList src={checkMarkIcon} skill="Example" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Example" />
        <SkillList src={checkMarkIcon} skill="Example" />
        <SkillList src={checkMarkIcon} skill="Example" />
        <SkillList src={checkMarkIcon} skill="Example" />
        <SkillList src={checkMarkIcon} skill="Example" />
      </div>
      <hr />
    </section>
  )
}

export default Skills
