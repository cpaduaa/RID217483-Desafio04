import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Cristiane Pádua Alves</p>
      <div style={styles.icons}>
        <a
          href="https://github.com/cpaduaa"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/cristiane-p%C3%A1dua-alves-1044b7186/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:cris.padua.96@gmail.com" style={styles.iconLink}>
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '2rem',
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center' as const,
    width: '100vw',
  },

  text: {
    marginBottom: '1rem',
  },

  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap' as const,
  },

  iconLink: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
};

export default Footer;


