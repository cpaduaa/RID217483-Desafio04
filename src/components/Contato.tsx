import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contato() {
  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Contato</h1>

      <div style={styles.contactContainer}>
        <a
          href="https://github.com/cpaduaa"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <FaGithub style={styles.icon} /> github.com/cpaduaa
        </a>

        <a
          href="https://www.linkedin.com/in/cristiane-p%C3%A1dua-alves-1044b7186/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <FaLinkedin style={styles.icon} /> Cristiane Pádua
        </a>

        <a href="mailto:cris.padua.96@gmail.com" style={styles.link}>
          <FaEnvelope style={styles.icon} /> cris.padua.96@gmail.com
        </a>

        <a href="tel:+5531987654321" style={styles.link}>
          <FaPhone style={styles.icon} /> (+44) 07519913258
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '5rem 2rem',
    textAlign: 'center' as const,
    backgroundColor: '#ffffff',
    minHeight: '80vh',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#1a1a1a',
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    fontSize: '1.1rem',
    textDecoration: 'none',
    color: '#333',
    transition: 'color 0.3s',
  },
  icon: {
    fontSize: '1.3rem',
  },
};

export default Contato;




