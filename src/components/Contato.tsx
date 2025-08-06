function Contato() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Entre em contato</h2>
      <p style={styles.text}>
        Se você deseja conversar sobre projetos, colaborações ou apenas dizer olá, estou disponível!
      </p>

      <div style={styles.card}>
        <p style={styles.label}>Telefone:</p>
        <p style={styles.value}>+44 7519 913259</p>

        <p style={styles.label}>E-mail:</p>
        <p style={styles.value}>cris.padua.96@gmail.com</p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '3rem 1rem',
    backgroundColor: '#f8f8f8',
    textAlign: 'center' as const,
    width: '100%',
    boxSizing: 'border-box' as const,
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
    maxWidth: '700px',
    margin: '0 auto 2rem auto',
    padding: '0 1rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
    marginTop: '1rem',
    minWidth: '300px',
    maxWidth: '90%',
    boxSizing: 'border-box' as const,
  },
  label: {
    fontSize: '1rem',
    color: '#888',
    marginTop: '1rem',
    marginBottom: '0.3rem',
  },
  value: {
    fontSize: '1.4rem',
    fontWeight: 'bold' as const,
    color: '#222',
    margin: 0,
    wordWrap: 'break-word' as const,
  },
};

export default Contato;


