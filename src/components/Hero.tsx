import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Olá, eu sou a <span className="bold">Cristiane Pádua</span><br />
          <span className="bold">Desenvolvedora Front-End</span>
        </h1>

        <p className="hero-subtitle">
          Desenvolvedora Front-End apaixonada por criar interfaces intuitivas, acessíveis e responsivas. Tenho experiência com HTML, CSS, JavaScript e frameworks modernos como React. Busco constantemente melhorar a experiência do usuário através de código limpo e boas práticas de desenvolvimento.
        </p>

        <a href="/curriculo.pdf" download className="hero-button">
          Download resumo
        </a>
      </div>
    </section>
  );
}

export default Hero;