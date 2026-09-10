import barbershopConfig from '../data/barbershopConfig';
import './Header.css';

function Header() {
  const linkWhatsapp = `https://wa.me/${barbershopConfig.whatsapp}?text=${encodeURIComponent(
    barbershopConfig.whatsappMensagem
  )}`;

  return (
    <header className="header">
      <div className="header-logo">{barbershopConfig.nome}</div>
      <nav className="header-nav">
        <a href="#servicos">Serviços</a>
        <a href="#equipe">Equipe</a>
        <a href="#contato">Contato</a>
      </nav>
      <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="header-btn">
        Agendar
      </a>
    </header>
  );
}

export default Header;