function Blog() {
  return (
    <>
      <section className="blog">
        <h2 className="blog-title">Blog</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <h3 className="blog-post-title">Minha transição de carreira</h3>
            <p className="blog-meta">07 Ago 2025 • Psicologia, Tecnologia</p>
            <p className="blog-text">
              Sou formada em Psicologia, com foco em Psicologia Social e Jurídica. Atuei por um tempo nessa área, mas minha trajetória pessoal me levou a repensar meus caminhos profissionais. Após me mudar para outro país, percebi que a Psicologia já não era mais o que me fazia sentir realizada. Comecei então a buscar novas possibilidades, algo que me despertasse curiosidade, propósito e crescimento. Foi assim que descobri a área da tecnologia. Em março de 2025, iniciei o curso de Engenharia de Software na Escola DNC e, desde então, estou completamente envolvida nesse novo universo. A cada projeto, desafio e aprendizado, tenho certeza de que fiz a escolha certa. Estou me desenvolvendo em HTML, CSS, JavaScript, Git/GitHub, entre outras tecnologias, e aprendendo a criar soluções funcionais, acessíveis e responsivas para a web. Mais do que uma nova carreira, essa transição representa liberdade. A tecnologia me permite trabalhar de qualquer lugar do mundo, algo essencial para mim neste momento da vida. Ainda estou em processo de aprendizado e transição, mas motivada, dedicada e pronta para contribuir em projetos reais. Busco minha primeira oportunidade como desenvolvedora front-end júnior ou estagiária em um ambiente colaborativo, onde eu possa continuar aprendendo, crescer com o time e transformar conhecimento em resultado.
            </p>
          </div>
          <div className="blog-card">
            <h3 className="blog-post-title">Aprendizados com HTML, CSS e JavaScript</h3>
            <p className="blog-meta">01 Ago 2025 • Estudos, Front‑end</p>
            <p className="blog-text">
              Desde que iniciei meus estudos em Engenharia de Software, venho me dedicando a compreender todos os fundamentos que compõem essa área, tanto no front-end quanto no back-end. Estou focada em absorver cada conteúdo que me é ensinado, me aprofundando nos conceitos e buscando aplicá-los na prática de forma sólida e consistente. Até o momento, já estudei HTML, CSS e JavaScript, que têm sido a base para meus primeiros projetos. Com essas tecnologias, aprendi sobre estrutura semântica, responsividade, estilização com CSS, lógica de programação, manipulação do DOM, eventos, funções e controle de fluxo. Tenho praticado esses conhecimentos na construção do meu portfólio e em desafios propostos ao longo do curso. Além disso, venho iniciando meus estudos com React e TypeScript, o que tem ampliado minha visão sobre o desenvolvimento de interfaces mais dinâmicas e modernas. Mesmo ainda em processo de formação, estou cada vez mais motivada com tudo que estou aprendendo. Essa transição de carreira tem sido uma jornada de descoberta e crescimento, e sigo com entusiasmo e dedicação para evoluir como futura profissional da tecnologia.
            </p>
          </div>
        </div>
      </section>

      <style>
        {`
          .blog {
            padding: 4rem 2rem;
            background-color: #f0f7fb; /* cor azul-clara do template */
          }
          .blog-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
            color: #1f2a37; /* cor escura do template */
            text-align: left;
          }
          .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
          }
          .blog-card {
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .blog-post-title {
            font-size: 1.4rem;
            font-weight: 600;
            color: #1f2a37;
          }
          .blog-meta {
            font-size: 0.85rem;
            color: #708090;
          }
          .blog-text {
            font-size: 1rem;
            color: #495057;
            line-height: 1.6;
          }
          @media (max-width: 768px) {
            .blog-title {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
}

export default Blog;