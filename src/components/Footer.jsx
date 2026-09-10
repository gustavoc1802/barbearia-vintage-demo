import barbershopConfig from '../data/barbershopConfig';
import './Footer.css';

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{barbershopConfig.nome}</p>
      <p>© {anoAtual} — Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;