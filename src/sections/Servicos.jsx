import barbershopConfig from '../data/barbershopConfig';
import './Servicos.css';

function Servicos() {
  return (
    <section id="servicos" className="servicos">
      <h2>Serviços</h2>
      <div className="servicos-lista">
        {barbershopConfig.servicos.map((servico) => (
          <div className="servico-item" key={servico.nome}>
            <span>{servico.nome}</span>
            <span>R$ {servico.preco}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;