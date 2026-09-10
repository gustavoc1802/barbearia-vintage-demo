import barbershopConfig from '../data/barbershopConfig';
import './Horarios.css';

function Horarios() {
  return (
    <section id="horarios" className="horarios">
      <h2>Horário de Funcionamento</h2>
      <div className="horarios-lista">
        {barbershopConfig.horarios.map((h) => (
          <div className="horario-item" key={h.dia}>
            <span>{h.dia}</span>
            <span>{h.horario}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Horarios;