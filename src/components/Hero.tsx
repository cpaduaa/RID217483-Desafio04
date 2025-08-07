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
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>

        <a href="/curriculo.pdf" download className="hero-button">
          Download resumo
        </a>
      </div>
    </section>
  );
}

export default Hero;
