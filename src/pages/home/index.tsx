import { Heading, Text } from '@ignite-ui/react'
import React from 'react'
import { Container, Hero, Preview } from './styles'
import previewImage from '../../assets/app.png'
import Image from 'next/image'

function Home() {
  return (
    <Container>
        <Hero>
            <Heading as='h1' size='4xl'>Agendamento descomplicado</Heading>
            <Text size='lg'>
            Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
            </Text>
        </Hero>

        <Preview>
        <Image src={previewImage} height={400} quality={100} priority alt='preview'/>
        </Preview>
    </Container>
  )
}

export default Home