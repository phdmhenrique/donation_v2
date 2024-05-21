import React from 'react';
import PhotoUser from '../../Assets/photo-people.jpg';
import { Container } from './NavAccount.js';

function NavAccount() {
    return (
        <Container>
            <img src={PhotoUser} alt="Foto de usuário" />
        </Container>
    )
}

export default NavAccount