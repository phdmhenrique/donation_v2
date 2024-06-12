import styled from 'styled-components';

export const Container = styled.main`
    max-width: 132rem;
    height: auto;
    margin: 0 auto;
    padding: 0 1.6rem;

    @media (max-width: 740px) {
        padding: 0 0.6rem;
    }
`;

export const Logo = styled.header`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: var(--font__36);
    padding: 1rem 0;

    &::after {
        content: 'Nation';
        font-weight: bold;
    }
`;

export const LayoutContainer = styled.section`
    width: 100%;
    height: 144rem;
    display: grid;
    grid-template-columns: 19.2rem minmax(77rem, 2fr) 32.5rem;
    justify-content: center;

    @media (max-width: 1315px) {
        grid-template-columns: 9rem minmax(auto, 2fr) 32.5rem; /* Reduz a largura máxima da coluna central */
    }

    @media (max-width: 1216px) {
        grid-template-columns: 9rem minmax(auto, 2fr); /* Remove a seção da direita */
    }

    @media (max-width: 738px) {
        grid-template-columns: 1fr; /* Remove a parte da esquerda */
    }
`;