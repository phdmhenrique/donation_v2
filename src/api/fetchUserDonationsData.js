export const fetchUserDonationsData = (username) => {
  const user = {
    name: 'Alex Johnson',
    username: 'alexjohnson',
    image: '../../src/Assets/photo-people-00.jpg',
  };

  const donations = [
    {
      id: 1,
      user: 'alexjohnson',
      titleService: "Manutenção Geral de Computador",
      banner: "../../src/Assets/banner-service-03.png",
      tags: ["Serviço", "Gratuito", "Ferramenta"],
      quantityAvailability: 12,
      description: 'Lorem ipsum dolor sit amet consectetur.',
      address: 'Rua do Marechal, Centro, 222 Registro, SP',
      timeDonationCreated: '19:30',
      date: "Junho 24",
      status: "em andamento",
    },
    {
      id: 2,
      user: 'alexjohnson',
      titleService: "Serviço de diagnóstico.",
      banner: "../../src/Assets/banner-service-04.png",
      tags: ["Saúde", "Medicamentos"],
      quantityAvailability: 70,
      description: 'Lorem ipsum dolor sit amet consectetur.',
      address: 'Avenida das Américas, Barra da Tijuca, 3050 Rio de Janeiro, RJ',
      timeDonationCreated: '08:30',
      date: "Agosto 22",
      status: "concluída",
    },
    {
      id: 3,
      user: 'alexjohnson',
      titleService: "Amoras da Estação",
      banner: "../../src/Assets/banner-service-05.png",
      tags: ["Saúde", "Medicamentos", "Nutrição"],
      quantityAvailability: 8,
      description: 'Lorem ipsum dolor sit amet consectetur.',
      address: 'Travessa dos Pioneiros, Centro, 870 Curitiba, PR',
      timeDonationCreated: '11:00',
      date: "Março 23",
      status: "cancelada",
    },
  ];

  return {
    user,
    donations: donations.filter(donation => donation.user === username),
  };
};
