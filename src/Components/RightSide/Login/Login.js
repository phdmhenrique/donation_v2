import styled from 'styled-components';

export const RightsideLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const RightsideLogin__Title = styled.h1`
    color: var(--primary);
    font-size: var(--font__26);
    font-weight: 700;
    word-wrap: break-word;
`;

export const RightSideButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const RightSideButtons__Span = styled.span`
    color: var(--gray-3);
    font-size: var(--font__12);
    font-weight: 500;
    text-decoration-line: underline;
`;