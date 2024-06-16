export const fetchMemberDonationsData = (username) => {
    const member = {
      memberName: 'Alex Johnson',
      memberUsername: 'alexjohnson',
      memberImage: '../../src/Assets/photo-people-00.jpg',
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
          donationStatus: "em andamento", // aqui os status são: em andamento, concluídas e canceladas. Mas eu acredito que seja melhor se converter cada um para números tipo: 0, 1 e 2 para cada situação.   
        },
      ],
    };
  
    return {
      member,
      donations: donations.filter(donation => donation.member === username),
    };
  };
  