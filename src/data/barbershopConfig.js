// DADO DEMONSTRATIVO — dados de teste. Em cliente real, só isso muda.

const barbershopConfig = {
  nome: "Barbearia Vintage",
  slogan: "Tradição e estilo em cada detalhe",
  whatsapp: "5551999999999",
  whatsappMensagem: "Olá! Gostaria de agendar um horário na Barbearia Vintage.",
  instagram: "https://instagram.com/barbeariaexemplo",
  telefone: "(51) 99999-9999",
  endereco: "Rua das Tesouras, 123 - Rio Grande, RS",
  mapsLink: "https://maps.google.com/?q=Rua+das+Tesouras+123+Rio+Grande+RS",

  sobre: {
    titulo: "Nossa história",
    texto:
      "Há mais de 10 anos oferecendo cortes de qualidade com atendimento personalizado. Combinamos técnicas clássicas de barbearia com um ambiente moderno e confortável.",
  },

  servicos: [
    { nome: "Corte", preco: 40 },
    { nome: "Barba", preco: 30 },
    { nome: "Corte + Barba", preco: 60 },
    { nome: "Sobrancelha", preco: 15 },
  ],

  equipe: [
    { nome: "Carlos Silva", especialidade: "Cortes clássicos" },
    { nome: "João Pereira", especialidade: "Barba e navalha" },
  ],

  galeria: [
    { legenda: "Ambiente" },
    { legenda: "Corte finalizado" },
    { legenda: "Estação de trabalho" },
    { legenda: "Equipe" },
  ],

  depoimentos: [
    { nome: "Rafael M.", comentario: "Melhor barbearia da região, atendimento excelente.", nota: 5 },
    { nome: "Lucas T.", comentario: "Ambiente ótimo e cortes sempre impecáveis.", nota: 5 },
  ],

  horarios: [
    { dia: "Segunda", horario: "Fechado" },
    { dia: "Terça a Sexta", horario: "09:00 - 19:00" },
    { dia: "Sábado", horario: "09:00 - 17:00" },
    { dia: "Domingo", horario: "Fechado" },
  ],
};

export default barbershopConfig;