import barbershopConfig from '../data/barbershopConfig';
import './Contato.css';

function Contato() {
  const linkWhatsapp = `https://wa.me/${barbershopConfig.whatsapp}?text=${encodeURIComponent(
    barbershopConfig.whatsappMensagem
  )}`;

  return (
    <section id="contato" className="contato">
      <h2>Contato</h2>
      <p>{barbershopConfig.endereco}</p>
      <div className="contato-links">
        <a href={linkWhatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href={barbershopConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a href={barbershopConfig.mapsLink} target="_blank" rel="noreferrer">Ver no mapa</a>
      </div>
    </section>
  );
}

export default Contato;