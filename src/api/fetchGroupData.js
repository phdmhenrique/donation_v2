// Função para simular a chamada da API
export const fetchGroupData = () => {
  return [
    {
      comunityId: 1,
      comunityTitle: "Solidariedade em Rede",
      comunityUsername: "solidariedadeemrede",
      comunityDonationsPerDay: 15,
      comunityDescription:
        "Neste grupo nós doamos aquilo que podemos e pegamos aquilo que precisamos. Serviços e bens serão sempre bem-vindos. Vamos melhorar a nossa comunidade e fornecer qualquer tipo de suporte necessitados na região de Registro-SP. Junte-se a nós para fazer a diferença!",
      comunityAddress: "Rua do Moinho, 232, Registro-SP",
      comunityImage: "../../src/Assets/comunity-image.jpg",
      comunityBanner: "../../src/Assets/comunity-banner-01.png",
      comunitySolicited: false,
      comunityAccepted: true,
      members: [
        {
          memberId: 1,
          memberName: "Cameron Williamson",
          memberUsername: "cameronwilliamson",
          memberImage: "../../src/Assets/photo-people.jpg",
          donations: [
            {
              donationId: 1,
              donationSolicited: true,
              donationTitle: "Manutenção Geral de Computador",
              donationBanner: "../../src/Assets/banner-service-03.png",
              donationTags: ["Serviço", "Gratuito", "Ferramenta"],
              donationQuantityAvailability: 12,

              donationAvailability: {
                Seg: ["01:00", "04:00", "23:00", "19:00"],
                Ter: ["02:00", "08:00", "14:00", "20:00"],
                Qua: ["03:00", "09:00", "15:00", "21:00"],
                Qui: ["04:00", "10:00", "16:00", "22:00"],
                Sex: ["05:00", "11:00", "17:00", "23:00"],
                Sáb: ["06:00", "12:00", "18:00", "00:00"],
                Dom: ["01:00", "07:00", "13:00", "19:00"],
              },
              donationTimeCreated: "19:30",
              donationDate: "Junho 24",
              donationDescription:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magni corrupti sapiente quidem quae laudantium maiores excepturi veniam optio, repudiandae accusamus id ut enim nemo suscipit accusantium! Eligendi, explicabo repellendus animi, quam adipisci saepe molestias ut corporis maiores quod id fugiat, ipsum nihil labore! Repellendus voluptatum doloribus nobis non nam.",
              donationAddress: "Rua do Marechal, Centro, 222 Registro, SP",
            },
          ],
        },
        {
          memberId: 2,
          memberName: "Courtney Henry",
          memberUsername: "courtneyhenry",
          memberImage: "../../src/Assets/photo-people-04.png",
          donations: [
            {
              donationId: 2,
              donationSolicited: true,
              donationTitle: "Doando grãos e pó de café tradicional",
              donationBanner: "../../src/Assets/banner-service-06.jpg",
              donationTags: ["Grãos", "Café"],
              donationQuantityAvailability: "15kg",
              donationAvailability: {
                Seg: ["04:00", "10:00", "16:00"],
                Ter: ["03:00", "09:00", "15:00"],
                Qua: ["02:00", "08:00", "14:00"],
                Qui: ["01:00", "07:00", "13:00"],
                Sex: ["00:00", "06:00", "12:00"],
                Sáb: ["05:00", "11:00", "17:00"],
                Dom: ["04:00", "10:00", "16:00"],
              },
              donationTimeCreated: "12:30",
              donationDate: "Maio 06",
              donationDescription:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magni corrupti sapiente quidem quae laudantium maiores excepturi veniam optio, repudiandae accusamus id ut enim nemo suscipit accusantium! Eligendi, explicabo repellendus animi, quam adipisci saepe molestias ut corporis maiores quod id fugiat, ipsum nihil labore! Repellendus voluptatum doloribus nobis non nam.",
              donationAddress:
                "Praça da Liberdade, Liberdade, 100 Belo Horizonte, MG",
            },
          ],
        },
        {
          memberId: 3,
          memberName: "Jerome Bell",
          memberUsername: "jeromebell",
          memberImage: "../../src/Assets/photo-people-03.jpg",
          donations: [
            {
              donationId: 3,
              donationSolicited: true,
              donationTitle: "Serviço de Diagnóstico",
              donationBanner: "../../src/Assets/banner-service-04.png",
              donationTags: ["Saúde", "Medicamentos"],
              donationQuantityAvailability: 115,
              donationAvailability: {
                Seg: ["09:00", "15:00", "21:00"],
                Ter: ["08:00", "14:00", "20:00"],
                Qua: ["07:00", "13:00", "19:00"],
                Qui: ["06:00", "12:00", "18:00"],
                Sex: ["05:00", "11:00", "17:00"],
                Sáb: ["04:00", "10:00", "16:00"],
                Dom: ["03:00", "09:00", "15:00"],
              },
              donationTimeCreated: "15:24",
              donationDate: "Agosto 22",
              donationDescription:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magni corrupti sapiente quidem quae laudantium maiores excepturi veniam optio, repudiandae accusamus id ut enim nemo suscipit accusantium! Eligendi, explicabo repellendus animi, quam adipisci saepe molestias ut corporis maiores quod id fugiat, ipsum nihil labore! Repellendus voluptatum doloribus nobis non nam.",
              donationAddress:
                "Avenida das Américas, Barra da Tijuca, 3050 Rio de Janeiro, RJ",
            },
          ],
        },
        {
          memberId: 4,
          memberName: "Jada Jackson",
          memberUsername: "jadajackson",
          memberImage: "../../src/Assets/photo-people-02.jpg",
          donations: [
            {
              donationId: 4,
              donationSolicited: true,
              donationTitle: "Amoras da Estação",
              donationBanner: "../../src/Assets/banner-service-05.png",
              donationTags: ["Saúde", "Medicamentos", "Nutrição"],
              donationQuantityAvailability: 72,
              donationAvailability: {
                Seg: ["12:00", "18:00", "00:00"],
                Ter: ["11:00", "17:00", "23:00"],
                Qua: ["10:00", "16:00", "22:00"],
                Qui: ["09:00", "15:00", "21:00"],
                Sex: ["08:00", "14:00", "20:00"],
                Sáb: ["07:00", "13:00", "19:00"],
                Dom: ["06:00", "12:00", "18:00"],
              },
              donationTimeCreated: "09:14",
              donationDate: "Março 12",
              donationDescription:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magni corrupti sapiente quidem quae laudantium maiores excepturi veniam optio, repudiandae accusamus id ut enim nemo suscipit accusantium! Eligendi, explicabo repellendus animi, quam adipisci saepe molestias ut corporis maiores quod id fugiat, ipsum nihil labore! Repellendus voluptatum doloribus nobis non nam.",
              donationAddress:
                "Travessa dos Pioneiros, Centro, 870 Curitiba, PR",
            },
          ],
        },
        {
          memberId: 5,
          memberName: "Jacob Jones",
          memberUsername: "jacobjones",
          memberImage: "../../src/Assets/photo-people-05.jpeg",
          donations: [
            {
              donationId: 5,
              donationSolicited: true,
              donationTitle: "Doando Frutas em geral",
              donationBanner: "../../src/Assets/banner-service-07.jpg",
              donationTags: ["Frutas", "Promoção"],
              donationQuantityAvailability: 31,
              donationAvailability: {
                Seg: ["18:00", "00:00"],
                Ter: ["17:00", "23:00"],
                Qua: ["16:00", "22:00"],
                Qui: ["15:00", "21:00"],
                Sex: ["14:00", "20:00"],
                Sáb: ["13:00", "19:00"],
                Dom: ["12:00", "18:00"]
              },
              donationTimeCreated: "18:52",
              donationDate: "Novembro 17",
              donationDescription:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magni corrupti sapiente quidem quae laudantium maiores excepturi veniam optio, repudiandae accusamus id ut enim nemo suscipit accusantium! Eligendi, explicabo repellendus animi, quam adipisci saepe molestias ut corporis maiores quod id fugiat, ipsum nihil labore! Repellendus voluptatum doloribus nobis non nam.",
              donationAddress:
                "Rua das Palmeiras, Bela Vista, 450 Porto Alegre, RS",
            },
          ],
        },
        {
          memberId: 6,
          memberName: "Leslie Alexander",
          memberUsername: "lesliealexander",
          memberImage: "../../src/Assets/photo-people-06.jpg",
          donations: [
            {
              donationId: 6,
              donationSolicited: true,
              donationTitle: "Doando pacotes de cereais",
              donationBanner: "../../src/Assets/banner-service-08.jpg",
              donationTags: ["Cereais", "Grãos"],
              donationQuantityAvailability: 42,
              donationAvailability: {
                Seg: ["06:00", "12:00"],
                Ter: ["05:00", "11:00"],
                Qua: ["04:00", "10:00"],
                Qui: ["03:00", "09:00"],
                Sex: ["02:00", "08:00"],
                Sáb: ["01:00", "07:00"],
                Dom: ["00:00", "06:00"]
              },
              donationTimeCreated: "20:13",
              donationDate: "Janeiro 02",
              donationDescription:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magni corrupti sapiente quidem quae laudantium maiores excepturi veniam optio, repudiandae accusamus id ut enim nemo suscipit accusantium! Eligendi, explicabo repellendus animi, quam adipisci saepe molestias ut corporis maiores quod id fugiat, ipsum nihil labore! Repellendus voluptatum doloribus nobis non nam.",
              donationAddress:
                "Alameda dos Anjos, Santo Antônio, 1280 Salvador, BA",
            },
          ],
        },
      ],
    },
    {
      comunityId: 2,
      comunityTitle: "Apoio à Educação",
      comunityUsername: "apoioeducacao",
      comunityDonationsPerDay: 10,
      comunityDescription:
        "Nosso objetivo é fornecer materiais escolares e apoio educacional para crianças carentes na região de São Paulo.",
      comunityAddress: "Avenida Central, 123, São Paulo-SP",
      comunityImage: "../../src/Assets/comunity-image-02.png",
      comunityBanner: "../../src/Assets/comunity-banner-02.jpg",
      comunitySolicited: false,
      comunityAccepted: false,
      members: [
        {
          memberId: 1,
          memberName: "Helena Brigs",
          memberUsername: "helenabrigs",
          memberImage: "../../src/Assets/photo-people-07.jpg",
          donations: [
            {
              donationId: 1,
              donationTitle: "Manutenção Geral de Computador",
              donationBanner: "../../src/Assets/banner-service-03.png",
              donationTags: ["Serviço", "Gratuito", "Ferramenta"],
              donationQuantityAvailability: 12,
              donationAvailability: {
                Seg: ["01:00", "04:00", "23:00", "19:00"],
                Ter: ["02:00", "08:00", "14:00", "20:00"],
                Qua: ["03:00", "09:00", "15:00", "21:00"],
                Qui: ["04:00", "10:00", "16:00", "22:00"],
                Sex: ["05:00", "11:00", "17:00", "23:00"],
                Sáb: ["06:00", "12:00", "18:00", "00:00"],
                Dom: ["01:00", "07:00", "13:00", "19:00"],
              },
              donationTimeCreated: "19:30",
              donationDate: "Junho 24",
              donationDescription:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magni corrupti sapiente quidem quae laudantium maiores excepturi veniam optio, repudiandae accusamus id ut enim nemo suscipit accusantium! Eligendi, explicabo repellendus animi, quam adipisci saepe molestias ut corporis maiores quod id fugiat, ipsum nihil labore! Repellendus voluptatum doloribus nobis non nam.",
              donationAddress: "Rua do Marechal, Centro, 222 Registro, SP",
            },
          ],
        },
        {
          memberId: 2,
          memberName: "Jéssica Afton",
          memberUsername: "jessyafton",
          memberImage: "../../src/Assets/photo-people-08.jpg",
          donations: [
            {
              donationId: 2,
              donationTitle: "Café Tradicional",
              donationBanner: "../../src/Assets/banner-service-06.jpg",
              donationTags: ["Grãos", "Café"],
              donationQuantityAvailability: "15kg",
              donationAvailability: {
                Seg: ["04:00", "10:00", "16:00"],
                Ter: ["03:00", "09:00", "15:00"],
                Qua: ["02:00", "08:00", "14:00"],
                Qui: ["01:00", "07:00", "13:00"],
                Sex: ["00:00", "06:00", "12:00"],
                Sáb: ["05:00", "11:00", "17:00"],
                Dom: ["04:00", "10:00", "16:00"],
              },
              donationTimeCreated: "12:30",
              donationDate: "Maio 24",
              donationDescription:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum magni corrupti sapiente quidem quae laudantium maiores excepturi veniam optio, repudiandae accusamus id ut enim nemo suscipit accusantium! Eligendi, explicabo repellendus animi, quam adipisci saepe molestias ut corporis maiores quod id fugiat, ipsum nihil labore! Repellendus voluptatum doloribus nobis non nam.",
              donationAddress:
                "Praça da Liberdade, Liberdade, 100 Belo Horizonte, MG",
            },
          ],
        },
      ],
    },
  ];
};
