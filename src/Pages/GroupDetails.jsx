import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGroupData } from '../api/fetchGroupData.js';

const GroupDetails = () => {
  const { groupId } = useParams();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = fetchGroupData(groupId);
      setGroup(data);
    };
    fetchData();
  }, [groupId]);

  if (!group) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <img src={group.banner} alt={`${group.title} banner`} />
      <h1>{group.title}</h1>
      <p>{group.description}</p>
      <div>Endereço: {group.address}</div>
      <div>Membros: {group.users.length}</div>
      <div>Doações por dia: {group.donationsPerDay}</div>
      {/* Adicione outros detalhes conforme necessário */}
    </div>
  );
};

export default GroupDetails;
