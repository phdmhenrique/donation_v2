import { Container } from './FullSize.js';

function FullSize({ children }) {
  return (
    <Container className="fullsize">
      {children}
    </Container>
  )
}

export default FullSize