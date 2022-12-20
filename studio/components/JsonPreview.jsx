import styled from 'styled-components'

export const JsonPreview = ({document}) => (
  <Container>
    <Title>JSON Data</Title>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </Container>
)

const Container = styled.div`
  padding: 1rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 1.5rem 0;
`
