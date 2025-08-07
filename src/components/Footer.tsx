import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
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

      <p style={styles.text}>Copyright ©2030 All rights reserved</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '4rem',
    padding: '2rem 1rem',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e0e0e0',
    textAlign: 'center' as const,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1rem',
  },
  iconLink: {
    color: '#1a1a1a',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  },
  text: {
    color: '#666',
    fontSize: '0.9rem',
  },
};

export default Footer;



