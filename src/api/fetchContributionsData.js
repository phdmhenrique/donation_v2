export const fetchContributionsData = () => {
  return [
    {
      id: 1,
      avatar: {
        image: '../../src/Assets/photo-people.jpg',
        name: 'Cameron Williamson',
        username: 'cameronwilliamson'
      },
      titleService: "Manutenção Geral de Computador",
      banner: "../../src/Assets/banner-service-03.png",
      tags: ["Serviço", "Gratuito", "Ferramenta"],
      availability: "10",
      date: "Junho 24",
    },
    {
      id: 2,
      titleService: "Serviço de diagnóstico.",
      avatar: {
        image: '../../src/Assets/photo-people-03.jpg',
        name: 'Jerome Bell',
        username: 'jeromebell'
      },
      banner: "../../src/Assets/banner-service-04.png",
      tags: ["Saúde", "Medicamentos"],
      availability: "5",
      date: "Agosto 22",
    },
    {
      id: 3,
      titleService: "Amoras da Estação",
      avatar: {
        image: '../../src/Assets/photo-people-02.jpg',
        name: 'Jada Jackson',
        username: 'jadajackson'
      },
      banner: "../../src/Assets/banner-service-05.png",
      tags: ["Saúde", "Medicamentos", "Nutrição"],
      availability: "14",
      date: "Março 23",
    },
  ];
};
