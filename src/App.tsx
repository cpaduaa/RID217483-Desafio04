import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Contato from './components/Contato';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;




