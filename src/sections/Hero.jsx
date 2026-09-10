import barbershopConfig from '../data/barbershopConfig';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">{barbershopConfig.nome}</h1>
      <p className="hero-subtitle">{barbershopConfig.slogan}</p>
    </section>
  );
}

export default Hero;