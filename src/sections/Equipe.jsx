import barbershopConfig from '../data/barbershopConfig';
import './Equipe.css';

function Equipe() {
  return (
    <section id="equipe" className="equipe">
      <h2>Nossa Equipe</h2>
      <div className="equipe-lista">
        {barbershopConfig.equipe.map((membro) => (
          <div className="equipe-item" key={membro.nome}>
            <div className="equipe-foto-placeholder">Foto</div>
            <h3>{membro.nome}</h3>
            <p>{membro.especialidade}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Equipe;