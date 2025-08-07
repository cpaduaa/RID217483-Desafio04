import Hero from './Hero';
import Blog from './Blog';
import Projects from './Projects';

function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="projetos">
        <Projects />
      </section>
    </main>
  );
}

export default Home;
