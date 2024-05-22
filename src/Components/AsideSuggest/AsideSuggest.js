import styled from "styled-components";

export const Container = styled.aside`
    height: 100%;
    padding: 0 0 0 1.6rem;
    display: flex;
    flex-direction: column;
    gap: .4rem;
`;

export const SuggestTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--font__16);

    & span {
        
    }
`;

export const SuggestContainer = styled.div`
    width: 100%;
    height: 11.7rem;
    border-radius: .4rem;

    display: flex;
    flex-direction: column;
    gap: 1.1rem;

    background-color: black;

    & img {
        width: 100%;
        height: 100%;
    }
`;

export const UserPhoto = styled.div``;

export const NameUser = styled.div``;