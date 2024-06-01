import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchGroupData } from '../api/fetchGroupData.js';

const GroupDetails = () => {
    const { groupId } = useParams();
    const groups = fetchGroupData();
    const group = groups.find(group => group.id === parseInt(groupId));

    if (!group) {
        return <div>Grupo não encontrado</div>;
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
