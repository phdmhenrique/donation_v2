import styled from 'styled-components';

export const TabSearch = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: .8rem .8rem .8rem 3.8rem;
    border: .2rem solid var(--gray-2);
    border-radius: 0.4rem;
    font-size: var(--font__16);
    font-weight: 500;
    word-wrap: break-word;
    color: var(--gray-3);

    &::placeholder {
      color: var(--gray-2);
    }
  }

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.9rem;
    height: 1.9rem;
  }
`;