import React from 'react';

function Blog() {
  return (
    <section style={styles.section as React.CSSProperties} id="blog">
      <h2 style={styles.title as React.CSSProperties}>Blog</h2>
      <div style={styles.cardContainer as React.CSSProperties}>
        <div style={styles.card as React.CSSProperties}>
          <h3 style={styles.cardTitle as React.CSSProperties}>Minha transição de carreira</h3>
          <p style={styles.cardText as React.CSSProperties}>
            Sou formada em Psicologia, com foco em Psicologia Social e Jurídica. Atuei por um tempo nessa área, mas minha trajetória pessoal me levou a repensar meus caminhos profissionais. Após me mudar para outro país, percebi que a Psicologia já não era mais o que me fazia sentir realizada. Comecei então a buscar novas possibilidades, algo que me despertasse curiosidade, propósito e crescimento. Foi assim que descobri a área da tecnologia. Em março de 2025, iniciei o curso de Engenharia de Software na Escola DNC e, desde então, estou completamente envolvida nesse novo universo. A cada projeto, desafio e aprendizado, tenho certeza de que fiz a escolha certa. Estou me desenvolvendo em HTML, CSS, JavaScript, Git/GitHub, entre outras tecnologias, e aprendendo a criar soluções funcionais, acessíveis e responsivas para a web. Mais do que uma nova carreira, essa transição representa liberdade. A tecnologia me permite trabalhar de qualquer lugar do mundo, algo essencial para mim neste momento da vida. Ainda estou em processo de aprendizado e transição, mas motivada, dedicada e pronta para contribuir em projetos reais. Busco minha primeira oportunidade como desenvolvedora front-end júnior ou estagiária em um ambiente colaborativo, onde eu possa continuar aprendendo, crescer com o time e transformar conhecimento em resultado.
          </p>
        </div>

        <div style={styles.card as React.CSSProperties}>
          <h3 style={styles.cardTitle as React.CSSProperties}>Aprendizados com HTML, CSS e JavaScript</h3>
          <p style={styles.cardText as React.CSSProperties}>
            Desde que iniciei meus estudos em Engenharia de Software, venho me dedicando a compreender todos os fundamentos que compõem essa área, tanto no front-end quanto no back-end. Estou focada em absorver cada conteúdo que me é ensinado, me aprofundando nos conceitos e buscando aplicá-los na prática de forma sólida e consistente. Até o momento, já estudei HTML, CSS e JavaScript, que têm sido a base para meus primeiros projetos. Com essas tecnologias, aprendi sobre estrutura semântica, responsividade, estilização com CSS, lógica de programação, manipulação do DOM, eventos, funções e controle de fluxo. Tenho praticado esses conhecimentos na construção do meu portfólio e em desafios propostos ao longo do curso. Além disso, venho iniciando meus estudos com React e TypeScript, o que tem ampliado minha visão sobre o desenvolvimento de interfaces mais dinâmicas e modernas. Mesmo ainda em processo de formação, estou cada vez mais motivada com tudo que estou aprendendo. Essa transição de carreira tem sido uma jornada de descoberta e crescimento, e sigo com entusiasmo e dedicação para evoluir como futura profissional da tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: '100%',
    padding: '4rem 2rem',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
    color: '#333',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: '2rem',
    width: '100%',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    borderRadius: '10px',
    flex: '1 1 500px',
    maxWidth: '600px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    textAlign: 'left',
    overflowY: 'auto',
    // maxHeight: '400px', // se quiser limitar altura e ativar scroll
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#444',
  },
  cardText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    textAlign: 'justify',
    color: '#555',
  },
};

export default Blog;
