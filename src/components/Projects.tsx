import projeto1 from '../assets/projeto1.svg';
import projeto2 from '../assets/projeto2.svg';
import projeto3 from '../assets/projeto3.svg';

const projects = [
  {
    title: 'Página Responsiva The Dev News',
    description:
      'Landing page desenvolvida como parte do desafio The Dev News, com foco em responsividade e experiência do usuário. O projeto apresenta uma estrutura organizada para exibição de notícias e artigos, utilizando HTML e CSS para criar um layout limpo e funcional, que se adapta a diferentes tamanhos de tela.',
    link: 'https://thedevnewsdesafio02.netlify.app/',
    image: projeto1,
  },
  {
    title: 'Projeto Curso 2',
    description:
      'Landing Page para arquitetura, com foco em design moderno e responsividade. Apresenta portfólio visual, serviços e contato. Desenvolvido com HTML, CSS e JavaScript para navegação fluida.',
    link: 'https://arquiteturaedesign.netlify.app/',
    image: projeto2,
  },
  {
    title: 'DNC Landing Page Responsiva',
    description:
      'Site minimalista e responsivo com HTML e CSS, focado em apresentação direta de serviços ou produtos. Destaque para usabilidade e estética.',
    link: 'https://statuesque-ganache-b13577.netlify.app/',
    image: projeto3,
  },
];

function Projects() {
  return (
    <section style={styles.section} id="projetos">
      <h2 style={styles.heading}>Meus Projetos</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <img
              src={project.image}
              alt={project.title}
              style={styles.image}
            />
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              Ver projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: '100%',
    padding: '4rem 1rem',
    backgroundColor: '#f0f0f0',
    textAlign: 'center' as const,
    boxSizing: 'border-box' as const,
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 6px 14px rgba(0,0,0,0.07)',
    textAlign: 'left' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover' as const,
    borderRadius: '12px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#1a1a1a',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '1.5rem',
  },
  button: {
    display: 'inline-block',
    padding: '0.8rem 1.6rem',
    backgroundColor: '#646cff',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    alignSelf: 'flex-start',
  },
};

export default Projects;


