import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--white-smoke);
  z-index: 999;
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