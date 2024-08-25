import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../assets/checkmark-light.svg'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import SkillList from './SkillList'
import {useTheme} from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Google Sheets" />
        <SkillList src={checkMarkIcon} skill="Microsoft Powerpoint" />
        <SkillList src={checkMarkIcon} skill="Microsoft Word" />
        <SkillList src={checkMarkIcon} skill="Microsoft Excel" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="Bootstrap CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Javascript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Vite + React" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="d3.js" />
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Pygame" />
        <SkillList src={checkMarkIcon} skill="Django" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="MariaDB" />
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Apache Web Server" />
        <SkillList src={checkMarkIcon} skill="CompTIA A+" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Github" />
        <SkillList src={checkMarkIcon} skill="Netlify" />
        <SkillList src={checkMarkIcon} skill="Unreal Game Engine" />
        <SkillList src={checkMarkIcon} skill="XAMPP" />
      </div>
      <hr />
    </section>
  )
}

export default Skills
