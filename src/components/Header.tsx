import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>Portfolio</div>
        <nav style={styles.nav}>
          <a
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('blog');
            }}
            style={styles.link}
          >
            Blog
          </a>
          <a
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projetos');
            }}
            style={styles.link}
          >
            Projetos
          </a>
          <Link
            to="/contato"
            style={{
              ...styles.link,
              ...(location.pathname === '/contato' ? styles.active : {}),
            }}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#fff',
    padding: '1.5rem 2rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#1a1a1a',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    textDecoration: 'none',
    fontSize: '1rem',
    color: '#1a1a1a',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  },
  active: {
    color: '#0072f5',
    fontWeight: 600,
  },
};

export default Header;
