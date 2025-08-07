import projeto1 from '../assets/projeto1.svg';
import projeto2 from '../assets/projeto2.svg';
import projeto3 from '../assets/projeto3.svg';

function Projects() {
  return (
    <>
      <section className="projects">
        <h2 className="projects-title">Projetos</h2>
        <div className="projects-list">
          <div className="project-item">
            <a href="https://thedevnewsdesafio02.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={projeto1} alt="Projeto 1" className="project-image" />
            </a>
            <div className="project-info">
              <h3 className="project-title">Página Responsiva The Dev News</h3>
              <p className="project-description">
                Landing page desenvolvida como parte do desafio The Dev News, com foco em responsividade e experiência do usuário.
              </p>
            </div>
          </div>

          <div className="project-item">
            <a href="https://arquiteturaedesign.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={projeto2} alt="Projeto 2" className="project-image" />
            </a>
            <div className="project-info">
              <h3 className="project-title">Landing Page Arquitetura</h3>
              <p className="project-description">
                Landing Page para arquitetura, com foco em design moderno e responsividade.
              </p>
            </div>
          </div>

          <div className="project-item">
            <a href="https://statuesque-ganache-b13577.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={projeto3} alt="Projeto 3" className="project-image" />
            </a>
            <div className="project-info">
              <h3 className="project-title">DNC Landing Page Responsiva</h3>
              <p className="project-description">
                Site minimalista e responsivo com HTML e CSS, focado em apresentação direta de serviços ou produtos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .projects {
            padding: 4rem 2rem;
            background-color: #ffffff;
          }
          .projects-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
            color: #1f2a37;
            text-align: left;
          }
          .projects-list {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          .project-item {
            display: flex;
            align-items: center;
            gap: 2rem;
          }
          .project-image {
            width: 160px;
            height: 120px;
            object-fit: cover;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;
          }
          .project-image:hover {
            transform: scale(1.03);
          }
          .project-info {
            flex: 1;
          }
          .project-title {
            font-size: 1.4rem;
            font-weight: 600;
            color: #1f2a37;
            margin-bottom: 0.5rem;
          }
          .project-description {
            font-size: 1rem;
            color: #495057;
            line-height: 1.6;
          }
          @media (max-width: 768px) {
            .project-item {
              flex-direction: column;
              align-items: flex-start;
            }
            .project-image {
              width: 100%;
              height: auto;
            }
            .projects-title {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
}

export default Projects;
