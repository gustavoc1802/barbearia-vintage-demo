import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Sobre from './sections/Sobre';
import Servicos from './sections/Servicos';
import Equipe from './sections/Equipe';
import Galeria from './sections/Galeria';
import Depoimentos from './sections/Depoimentos';
import Horarios from './sections/Horarios';
import Contato from './sections/Contato';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Equipe />
      <Galeria />
      <Depoimentos />
      <Horarios />
      <Contato />
      <Footer />
    </>
  );
}

export default App;