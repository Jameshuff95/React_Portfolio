import styles from './HeroStyles.module.css'
import heroImg from '../../assets/me.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.heroImg} src={heroImg} alt="Hero image" />
                <img onClick={toggleTheme} className={styles.colorMode} src={themeIcon} alt="Color mode icon" />
            </div>
            <div className={styles.info}>
                <h1>James <br /> Huff</h1>
                <h2>Software Engineering Student</h2>
                <span>
                    <a className="social_link" href="https://twitter.com/" target="_blank">
                        <img src={twitterIcon} alt="Twitter Logo" className="social_image" />
                    </a>
                    <a className="social_link" href="https://github.com/" target="_blank">
                        <img src={githubIcon} alt="Github Logo" className="social_image" />
                    </a>
                    <a className="social_link" href="https://linkedin.com/" target="_blank">
                        <img src={linkedinIcon} alt="LinkedIn Logo" className="social_image" />
                    </a>
                </span>
                <p className={styles.description}>With a passion for creating modern React web apps for commercial businesses.</p>
                <a href={CV} download><button className="hover">Resume</button></a>
            </div>
        </section>
    )
}

export default Hero;