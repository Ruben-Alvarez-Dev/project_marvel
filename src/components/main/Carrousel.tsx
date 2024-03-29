import { useEffect } from 'react'
import { Container } from '../styled.components'

export const Carrousel = () => {

  const getData = async () => {
    const url = import.meta.env.VITE_BASE_URL;
    const items = await fetch (url);
    const response = await items.json();
    console.log(response);
  }

  useEffect(() => {
    getData();
    console.log('Carrousel')
  }, [])

  return (
    <>
      <Container height={50}>
        Carrousel
      </Container>
    </>

  )
}
