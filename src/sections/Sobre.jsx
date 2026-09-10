import barbershopConfig from '../data/barbershopConfig';
import './Sobre.css';

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <h2>{barbershopConfig.sobre.titulo}</h2>
      <p>{barbershopConfig.sobre.texto}</p>
    </section>
  );
}

export default Sobre;
