import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1.6rem;
`;

export const Card = styled.div`
    width: 100%;
    background-color: var(--gray-1);
    min-height: max-content;
    border-radius: 0.4rem;

    & img {
        width: 100%;
        height: 8.7rem;
        padding: 0.8rem;
    }
`;

export const TitleAndDateInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem;


    & h1 {
        font-size: var(--font__16);
        font-weight: 700;
        color: var(--gray-0);
    }
`;
export const DateInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 0.8rem;


    & p {
        font-size: var(--font__14);
        color: var(--gray-3);
    }
`;

export const InterestsAndDetails = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
`;