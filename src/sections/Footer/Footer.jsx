import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id="footer" className={styles.container}>
        <p>
            &copy; 
            2024 James Huff.
            <br />
            All Right Reserved.
        </p>
    </section>
  )
}

export default Footer
