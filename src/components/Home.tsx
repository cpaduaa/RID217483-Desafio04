import Hero from '../components/Hero';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Contato from '../components/Contato';

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

      <section id="contato">
        <Contato />
      </section>
    </main>
  );
}

export default Home;