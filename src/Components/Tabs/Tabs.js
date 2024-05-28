import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: var(--gray-2);
`;

export const Container = styled.nav`
  width: 100%;
  min-height: 9.9rem;
  margin-top: 2.4rem;
  padding: 0 1.4rem;
`;

export const TabsContainer = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.2rem;

  padding: 0.8rem;
  background-color: var(--gray-1);
  border: .2rem solid var(--gray-2);
  border-radius: 0.4rem;
`;

export const TabList = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const Tab = styled.button`
  width: 15.1rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;
  font-size: var(--font__16);
  font-weight: bold;
  cursor: pointer;
  background-color: transparent;

  border-bottom: ${(props) => props.active ? ".3rem solid var(--primary)" : ".3rem solid transparent"};
  color: ${(props) => (props.active ? "var(--primary)" : "var(--gray-3)")};
  
  transition: all 0.2s;

  & path {
    fill: ${(props) => (props.active ? "var(--primary)" : "var(--gray-3)")};
  }
`;

export const ResultsAndFilters = styled.div`
  padding: 0 1.4rem;
  margin: 1.2rem 0;
  
  font-size: var(--font__16);
  color: var(--gray-3);
  font-weight: bold;
`;

export const TabContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 0 1.4rem;
  margin-top: 1.2rem;
`;