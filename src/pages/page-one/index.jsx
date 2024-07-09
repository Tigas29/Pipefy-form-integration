import styled from "styled-components";

const PageContainer = styled.div`
  background: var(--bg);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function PageOne() {
  return (
    <PageContainer>
      <h1>Página 1</h1>
    </PageContainer>
  );
}
