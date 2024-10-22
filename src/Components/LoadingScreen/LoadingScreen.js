import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--white-smoke); /* Altere para a cor de fundo desejada */
`;

export const Spinner = styled.div`
  border: 0.4rem solid var(--primary);
  border-top: 0.4rem solid var(--secondary);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;