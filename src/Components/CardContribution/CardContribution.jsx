import React from "react";

const CardContribution = () => {
  const contributions = [
    {
      id: 1,
      titleService: "Doações de livros usados.",
      banner: "https://via.placeholder.com/150",
      tags: ["Educação", "Livros"],
      availability: "10 dias",
      date: "2024-06-01",
    },
    {
      id: 2,
      titleService: "Serviço de diagnóstico.",
      banner: "https://via.placeholder.com/150",
      tags: ["Saúde", "Medicamentos"],
      availability: "5 dias",
      date: "2024-05-15",
    },
  ];

  return (
    <div>
      {contributions.map((contribution) => (
        <div key={contribution.id} className="contribution">
          <h1>{contribution.titleService}</h1>
          <img src={contribution.banner} alt="Banner da Doação" />
          <p>Tags: {contribution.tags.join(", ")}</p>
          <p>Disponibilidade: {contribution.availability}</p>
          <p>Data: {contribution.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CardContribution;
