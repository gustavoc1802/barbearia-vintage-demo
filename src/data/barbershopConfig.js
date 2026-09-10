// DADO DEMONSTRATIVO — dados de teste. Em cliente real, só isso muda.

const barbershopConfig = {
  nome: "Barbearia Black Jack",
  slogan: "Seu estilo, nossa precisão",
  whatsapp: "849696999",
  whatsappMensagem: "Olá! Gostaria de agendar um horário na Barbearia Black Jack.",
  instagram: "https://instagram.com/ngbgansin/",
  telefone: "(51) 99999-9999",
  endereco: "Rua das 69, 123 - Rio Grande, RS",
  mapsLink: "https://maps.google.com/?q=Rua+das+Tesouras+123+Rio+Grande+RS",

  sobre: {
    titulo: "Nossa história",
    texto:
      "Há mais de 10 anos oferecendo pika e cortes de qualidade com atendimento personalizado. Combinamos técnicas clássicas de barbearia com um ambiente moderno e confortável.",
  },

  servicos: [
    { nome: "Corte", preco: 20 },
    { nome: "Barba", preco: 15 },
    { nome: "Corte + Barba", preco: 100 },
    { nome: "Sobrancelha", preco: 200 },
  ],

  equipe: [
    { nome: "Julio Mogged", especialidade: "Cortes clássicos" },
    { nome: "Giovanna", especialidade: "Barba e navalha" },
  ],

  galeria: [
    { legenda: "Ambiente" },
    { legenda: "Corte finalizado" },
    { legenda: "Estação de trabalho" },
    { legenda: "Equipe" },
  ],

  depoimentos: [
    { nome: "Rafael M.", comentario: "Vai tomar no cu Julio porra.", nota: 5 },
    { nome: "Lucas T.", comentario: "Aiiiin que acerto doutora.", nota: 5 },
  ],

  horarios: [
    { dia: "Segunda", horario: "Fechado" },
    { dia: "Terça a Sexta", horario: "09:00 - 19:00" },
    { dia: "Sábado", horario: "09:00 - 17:00" },
    { dia: "Domingo", horario: "Fechado" },
  ],
};

export default barbershopConfig;