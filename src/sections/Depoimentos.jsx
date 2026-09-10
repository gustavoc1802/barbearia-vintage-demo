import barbershopConfig from '../data/barbershopConfig';
import './Depoimentos.css';

function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos">
      <h2>O que dizem nossos clientes</h2>
      <div className="depoimentos-lista">
        {barbershopConfig.depoimentos.map((dep) => (
          <div className="depoimento-item" key={dep.nome}>
            <p>"{dep.comentario}"</p>
            <span>— {dep.nome}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Depoimentos;