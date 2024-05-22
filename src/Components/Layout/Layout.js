import styled from 'styled-components';

export const Container = styled.main`
    width: 162rem;
    height: auto;
    margin: 0 auto;
`;

export const Logo = styled.header`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: var(--font__36);
    padding: 3rem 0;

    &::after {
        content: 'Nation';
        font-weight: bold;
    }
`;

export const LayoutContainer = styled.section`
    width: 100%;
    height: 192rem;
    display: grid;
    grid-template-columns: 19.2rem 77rem 31.1rem;
    justify-content: center;
`;

export const Content = styled.section`
    height: 100%;
    border: .1rem solid var(--gray-2);
    padding: 0 1.6rem;

`;
