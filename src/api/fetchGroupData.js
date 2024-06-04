// Função para simular a chamada da API
export const fetchGroupData = () => {
  return [
    {
      id: 1,
      title: "Solidariedade em Rede",
      username: "solidariedadeemrede",
      donationsPerDay: 15,
      description:
        "Este grupo é dedicado a fornecer suporte alimentar para famílias necessitadas na região de Registro-SP. Junte-se a nós para fazer a diferença!",
      address: "Rua do Moinho, 232, Registro-SP",
      image: "../../src/Assets/comunity-image.jpg",
      banner: "../../src/Assets/comunity-banner.jpg",
      users: [
        {
          id: 1,
          name: "Usuário 01",
          avatar: "https://via.placeholder.com/50/FF0000/FFFFFF?text=U1",
          donations: [
            {
              id: 1,
              type: "Food",
              date: "2024-01-01",
              amount: 10,
              status: "completed",
            },
            {
              id: 2,
              type: "Clothes",
              date: "2024-02-01",
              amount: 5,
              status: "in_progress",
            },
          ],
        },
        {
          id: 2,
          name: "Usuário 02",
          avatar: "https://via.placeholder.com/50/00FF00/FFFFFF?text=U2",
          donations: [
            {
              id: 3,
              type: "Books",
              date: "2024-01-05",
              amount: 2,
              status: "canceled",
            },
            {
              id: 4,
              type: "Toys",
              date: "2024-02-10",
              amount: 3,
              status: "completed",
            },
          ],
        },
        {
          id: 3,
          name: "Usuário 03",
          avatar: "https://via.placeholder.com/50/0000FF/FFFFFF?text=U3",
          donations: [
            {
              id: 5,
              type: "Wheelchairs",
              date: "2024-03-01",
              amount: 1,
              status: "completed",
            },
            {
              id: 6,
              type: "Crutches",
              date: "2024-03-15",
              amount: 2,
              status: "in_progress",
            },
          ],
        },
        {
          id: 4,
          name: "Usuário 04",
          avatar: "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U4",
          donations: [
            {
              id: 7,
              type: "Medicines",
              date: "2024-04-01",
              amount: 10,
              status: "completed",
            },
            {
              id: 8,
              type: "Walkers",
              date: "2024-04-10",
              amount: 1,
              status: "canceled",
            },
          ],
        },
        {
          id: 5,
          name: "Usuário 05",
          avatar: "https://via.placeholder.com/50/FF00FF/FFFFFF?text=U5",
          donations: [
            {
              id: 9,
              type: "Toys",
              date: "2024-05-01",
              amount: 5,
              status: "completed",
            },
            {
              id: 10,
              type: "Books",
              date: "2024-06-01",
              amount: 3,
              status: "in_progress",
            },
          ],
        },
        {
          id: 6,
          name: "Usuário 06",
          avatar: "https://via.placeholder.com/50/00FFFF/FFFFFF?text=U6",
          donations: [
            {
              id: 11,
              type: "Clothes",
              date: "2024-07-01",
              amount: 7,
              status: "completed",
            },
            {
              id: 12,
              type: "Food",
              date: "2024-08-01",
              amount: 4,
              status: "canceled",
            },
          ],
        },
      ],
      solicited: false,
    },
    {
      id: 2,
      title: "Apoio à Educação",
      username: "apoioeducacao",
      donationsPerDay: 10,
      description:
        "Nosso objetivo é fornecer materiais escolares e apoio educacional para crianças carentes na região de São Paulo.",
      address: "Avenida Central, 123, São Paulo-SP",
      image: "https://via.placeholder.com/150/0000FF/808080?text=Grupo+2",
      banner: "https://via.placeholder.com/770x280/0000FF/FFFFFF?text=Banner+Grupo+2",
      users: [
        {
          id: 7,
          name: "Usuário 07",
          avatar: "https://via.placeholder.com/50/FF0000/FFFFFF?text=U7",
          donations: [
            {
              id: 13,
              type: "Notebooks",
              date: "2024-09-01",
              amount: 20,
              status: "completed",
            },
            {
              id: 14,
              type: "Pens",
              date: "2024-09-15",
              amount: 50,
              status: "in_progress",
            },
          ],
        },
        {
          id: 8,
          name: "Usuário 08",
          avatar: "https://via.placeholder.com/50/00FF00/FFFFFF?text=U8",
          donations: [
            {
              id: 15,
              type: "Pencils",
              date: "2024-10-01",
              amount: 30,
              status: "completed",
            },
            {
              id: 16,
              type: "Erasers",
              date: "2024-10-10",
              amount: 40,
              status: "canceled",
            },
          ],
        },
        {
          id: 9,
          name: "Usuário 09",
          avatar: "https://via.placeholder.com/50/0000FF/FFFFFF?text=U9",
          donations: [
            {
              id: 17,
              type: "Books",
              date: "2024-11-01",
              amount: 10,
              status: "completed",
            },
            {
              id: 18,
              type: "Markers",
              date: "2024-11-15",
              amount: 25,
              status: "in_progress",
            },
          ],
        },
        {
          id: 10,
          name: "Usuário 10",
          avatar: "https://via.placeholder.com/50/FFFF00/FFFFFF?text=U10",
          donations: [
            {
              id: 19,
              type: "Crayons",
              date: "2024-12-01",
              amount: 15,
              status: "completed",
            },
            {
              id: 20,
              type: "Glue",
              date: "2024-12-10",
              amount: 10,
              status: "canceled",
            },
          ],
        },
        {
          id: 11,
          name: "Usuário 11",
          avatar: "https://via.placeholder.com/50/FF00FF/FFFFFF?text=U11",
          donations: [
            {
              id: 21,
              type: "Scissors",
              date: "2024-12-20",
              amount: 10,
              status: "completed",
            },
            {
              id: 22,
              type: "Rulers",
              date: "2024-12-25",
              amount: 5,
              status: "in_progress",
            },
          ],
        },
        {
          id: 12,
          name: "Usuário 12",
          avatar: "https://via.placeholder.com/50/00FFFF/FFFFFF?text=U12",
          donations: [
            {
              id: 23,
              type: "Folders",
              date: "2024-12-30",
              amount: 20,
              status: "completed",
            },
            {
              id: 24,
              type: "Notebooks",
              date: "2024-12-31",
              amount: 10,
              status: "canceled",
            },
          ],
        },
        {
          id: 13,
          name: "Usuário 13",
          avatar: "https://via.placeholder.com/50/000000/FFFFFF?text=U13",
          donations: [
            {
              id: 25,
              type: "Colored Pencils",
              date: "2024-11-01",
              amount: 15,
              status: "completed",
            },
            {
              id: 26,
              type: "Staplers",
              date: "2024-11-15",
              amount: 5,
              status: "in_progress",
            },
          ],
        },
      ],
      solicited: false,
    },
  ];
};
