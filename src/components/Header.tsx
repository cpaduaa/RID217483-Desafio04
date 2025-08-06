import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          Cristiane Pádua
        </Link>
      </h1>

      <nav>
        <ul style={styles.navList}>
          <li>
            <Link to="/" style={styles.navItem}>Home</Link>
          </li>
          <li>
            {isHomePage ? (
              <a href="#blog" style={styles.navItem}>Blog</a>
            ) : (
              <Link to="/blog" style={styles.navItem}>Blog</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#projetos" style={styles.navItem}>Projetos</a>
            ) : (
              <Link to="/projetos" style={styles.navItem}>Projetos</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#contato" style={styles.navItem}>Contato</a>
            ) : (
              <Link to="/contato" style={styles.navItem}>Contato</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    width: '100vw',
    maxWidth: '100%',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box' as const,
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: 'bold' as const,
    margin: 0,
  },
  logoLink: {
    textDecoration: 'none',
    color: '#333',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
  },
  navItem: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 500,
    transition: 'color 0.2s ease-in-out',
  },
} as const;

export default Header;

