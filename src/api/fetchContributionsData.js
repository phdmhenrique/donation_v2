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
      quantityAvailability: 12,
      availability: {
        Seg: ["01:00", "04:00", "23:00", "19:00"],
        Ter: ["02:00", "08:00", "14:00", "20:00"],
        Qua: ["03:00", "09:00", "15:00", "21:00"],
        Qui: ["04:00", "10:00", "16:00", "22:00"],
        Sex: ["05:00", "11:00", "17:00", "23:00"],
        Sáb: ["06:00", "12:00", "18:00", "00:00"],
        Dom: ["01:00", "07:00", "13:00", "19:00"]
      },
      timeDonationCreated: '19:30',
      date: "Junho 24",
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magni corrupti sapiente quidem quae laudantium maiores excepturi veniam optio, repudiandae accusamus id ut enim nemo suscipit accusantium! Eligendi, explicabo repellendus animi, quam adipisci saepe molestias ut corporis maiores quod id fugiat, ipsum nihil labore! Repellendus voluptatum doloribus nobis non nam.',
      address: 'Rua do Marechal, Centro, 222 Registro, SP',
    },
    {
      id: 2,
      avatar: {
        image: '../../src/Assets/photo-people-03.jpg',
        name: 'Jerome Bell',
        username: 'jeromebell'
      },
      titleService: "Serviço de diagnóstico.",
      banner: "../../src/Assets/banner-service-04.png",
      tags: ["Saúde", "Medicamentos"],
      quantityAvailability: 15,
      availability: {
        Seg: ["09:00", "15:00", "21:00"],
        Ter: ["08:00", "14:00", "20:00"],
        Qua: ["07:00", "13:00", "19:00"],
        Qui: ["06:00", "12:00", "18:00"],
        Sex: ["05:00", "11:00", "17:00"],
        Sáb: ["04:00", "10:00", "16:00"],
        Dom: ["03:00", "09:00", "15:00"]
      },
      date: "Agosto 22",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam ducimus quis voluptatem recusandae, possimus ipsa illo praesentium deleniti quasi laboriosam eos quae dignissimos maiores, facere nulla adipisci illum quod. Doloremque at ex nemo aut itaque tempore mollitia maiores debitis autem pariatur a ratione distinctio atque, excepturi labore perspiciatis temporibus? Error quia perspiciatis repellendus. Possimus dolore eveniet autem magni ratione culpa doloribus consequuntur molestiae nihil, optio fugiat aliquid excepturi deserunt, voluptatum et ad, quibusdam placeat quos. Facilis, magni. Laudantium eum placeat vero quis saepe molestiae amet. Asperiores consectetur incidunt vitae quas aliquid ipsam cum ipsa vel quod, quos ut delectus.',
      address: 'Avenida das Américas, Barra da Tijuca, 3050 Rio de Janeiro, RJ',
    },
    {
      id: 3,
      avatar: {
        image: '../../src/Assets/photo-people-02.jpg',
        name: 'Jada Jackson',
        username: 'jadajackson'
      },
      titleService: "Amoras da Estação",
      banner: "../../src/Assets/banner-service-05.png",
      tags: ["Saúde", "Medicamentos", "Nutrição"],
      quantityAvailability: 8,
      availability: {
        Seg: ["12:00", "18:00", "00:00"],
        Ter: ["11:00", "17:00", "23:00"],
        Qua: ["10:00", "16:00", "22:00"],
        Qui: ["09:00", "15:00", "21:00"],
        Sex: ["08:00", "14:00", "20:00"],
        Sáb: ["07:00", "13:00", "19:00"],
        Dom: ["06:00", "12:00", "18:00"]
      },
      date: "Março 23",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam ducimus quis voluptatem recusandae, possimus ipsa illo praesentium deleniti quasi laboriosam eos quae dignissimos maiores, facere nulla adipisci illum quod. Doloremque at ex nemo aut itaque tempore mollitia maiores debitis autem pariatur a ratione distinctio atque, excepturi labore perspiciatis temporibus? Error quia perspiciatis repellendus. Possimus dolore eveniet autem magni ratione culpa doloribus consequuntur molestiae nihil, optio fugiat aliquid excepturi deserunt, voluptatum et ad, quibusdam placeat quos. Facilis, magni. Laudantium eum placeat vero quis saepe molestiae amet. Asperiores consectetur incidunt vitae quas aliquid ipsam cum ipsa vel quod, quos ut delectus.',
      address: 'Travessa dos Pioneiros, Centro, 870 Curitiba, PR',
    },
    {
      id: 4,
      avatar: {
        image: '../../src/Assets/photo-people-04.png',
        name: 'Courtney Henry',
        username: 'courtneyhenry'
      },
      titleService: "Café Tradicional",
      banner: "../../src/Assets/banner-service-06.jpg",
      tags: ["Grãos", "Café"],
      quantityAvailability: 140,
      availability: {
        Seg: ["04:00", "10:00", "16:00"],
        Ter: ["03:00", "09:00", "15:00"],
        Qua: ["02:00", "08:00", "14:00"],
        Qui: ["01:00", "07:00", "13:00"],
        Sex: ["00:00", "06:00", "12:00"],
        Sáb: ["05:00", "11:00", "17:00"],
        Dom: ["04:00", "10:00", "16:00"]
      },
      date: "Julho 10",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam ducimus quis voluptatem recusandae, possimus ipsa illo praesentium deleniti quasi laboriosam eos quae dignissimos maiores, facere nulla adipisci illum quod. Doloremque at ex nemo aut itaque tempore mollitia maiores debitis autem pariatur a ratione distinctio atque, excepturi labore perspiciatis temporibus? Error quia perspiciatis repellendus. Possimus dolore eveniet autem magni ratione culpa doloribus consequuntur molestiae nihil, optio fugiat aliquid excepturi deserunt, voluptatum et ad, quibusdam placeat quos. Facilis, magni. Laudantium eum placeat vero quis saepe molestiae amet. Asperiores consectetur incidunt vitae quas aliquid ipsam cum ipsa vel quod, quos ut delectus.',
      address: 'Praça da Liberdade, Liberdade, 100 Belo Horizonte, MG',
    },
    {
      id: 5,
      avatar: {
        image: '../../src/Assets/photo-people-05.jpeg',
        name: 'Jacob Jones',
        username: 'jacobjones'
      },
      titleService: "Promoção em Frutas",
      banner: "../../src/Assets/banner-service-07.jpg",
      tags: ["Frutas", "Promoção"],
      quantityAvailability: 2,
      availability: {
        Seg: ["18:00", "00:00"],
        Ter: ["17:00", "23:00"],
        Qua: ["16:00", "22:00"],
        Qui: ["15:00", "21:00"],
        Sex: ["14:00", "20:00"],
        Sáb: ["13:00", "19:00"],
        Dom: ["12:00", "18:00"]
      },
      date: "Novembro 14",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam ducimus quis voluptatem recusandae, possimus ipsa illo praesentium deleniti quasi laboriosam eos quae dignissimos maiores, facere nulla adipisci illum quod. Doloremque at ex nemo aut itaque tempore mollitia maiores debitis autem pariatur a ratione distinctio atque, excepturi labore perspiciatis temporibus? Error quia perspiciatis repellendus. Possimus dolore eveniet autem magni ratione culpa doloribus consequuntur molestiae nihil, optio fugiat aliquid excepturi deserunt, voluptatum et ad, quibusdam placeat quos. Facilis, magni. Laudantium eum placeat vero quis saepe molestiae amet. Asperiores consectetur incidunt vitae quas aliquid ipsam cum ipsa vel quod, quos ut delectus.',
      address: 'Rua das Palmeiras, Bela Vista, 450 Porto Alegre, RS',
    },
    {
      id: 6,
      avatar: {
        image: '../../src/Assets/photo-people-06.jpg',
        name: 'Leslie Alexander',
        username: 'lesliealexander'
      },
      titleService: "Promoção em Cereais",
      banner: "../../src/Assets/banner-service-08.jpg",
      tags: ["Cereais", "Grãos"],
      quantityAvailability: 20,
      availability: {
        Seg: ["06:00", "12:00"],
        Ter: ["05:00", "11:00"],
        Qua: ["04:00", "10:00"],
        Qui: ["03:00", "09:00"],
        Sex: ["02:00", "08:00"],
        Sáb: ["01:00", "07:00"],
        Dom: ["00:00", "06:00"]
      },
      date: "Maio 03",
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quam ducimus quis voluptatem recusandae, possimus ipsa illo praesentium deleniti quasi laboriosam eos quae dignissimos maiores, facere nulla adipisci illum quod. Doloremque at ex nemo aut itaque tempore mollitia maiores debitis autem pariatur a ratione distinctio atque, excepturi labore perspiciatis temporibus? Error quia perspiciatis repellendus. Possimus dolore eveniet autem magni ratione culpa doloribus consequuntur molestiae nihil, optio fugiat aliquid excepturi deserunt, voluptatum et ad, quibusdam placeat quos. Facilis, magni. Laudantium eum placeat vero quis saepe molestiae amet. Asperiores consectetur incidunt vitae quas aliquid ipsam cum ipsa vel quod, quos ut delectus.',
      address: 'Alameda dos Anjos, Santo Antônio, 1280 Salvador, BA',
    },
  ];
};
