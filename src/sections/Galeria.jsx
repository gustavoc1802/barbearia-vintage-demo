import barbershopConfig from '../data/barbershopConfig';
import './Galeria.css';

function Galeria() {
  return (
    <section id="galeria" className="galeria">
      <h2>Galeria</h2>
      <div className="galeria-grid">
        {barbershopConfig.galeria.map((foto) => (
          <div className="galeria-item" key={foto.legenda}>
            {foto.legenda}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;