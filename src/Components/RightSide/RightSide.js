import styled from "styled-components";

export const RightSideContainer = styled.div`
  width: 50%;
  min-width: 27rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12.6rem;
  background-color: var(--white);

  .rightside-container {
    max-width: 32rem;
    width: 100%;
  }

  .rightside-login {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .rightside-login__title {
    color: var(--primary);
    font-size: var(--font__26);
    font-weight: 700;
    word-wrap: break-word;
  }

  .rightside-buttons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .rightside-buttons span {
    color: var(--gray-3);
    font-size: var(--font__12);
    font-weight: 500;
    text-decoration-line: underline;
  }

  .no-account {
    color: var(--gray-3);
    font-size: var(--font__16);
    font-weight: 500;
    padding: 1.8rem 0;
    border-bottom: .1rem solid var(--white-smoke);
  }

  .link {
    color: var(--primary);
    font-weight: 700;
    cursor: pointer;
  }

  .rightside__other-access {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .rightside__other-access__or {
    color: var(--gray-3);
    font-size: var(--font__16);
    font-weight: 500;
    padding-top: 2.4rem;
    padding-bottom: 1.7rem;
  }

  .rightside__other-access span {
    color: var(--gray-6);
    font-size: var(--font__16);
    font-weight: 700;
  }

  .rightside__other-access__message {
    color: var(--primary);
    font-size: var(--font__16);
    font-weight: 500;
    margin-top: 9.7rem;
  }

  /* Media queries */
  @media (max-width: 738px) {
    .rightside {
      width: 100% !important;
      padding-top: 6rem !important;
    }

    .rightside-container {
      padding: 0 1rem;
    }
  }
`;

export default RightSideContainer;
