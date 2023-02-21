import { Heading,Text,MultiStep, TextInput, Button } from '@ignite-ui/react'
import { signIn } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'
import React, { useEffect } from 'react'

import { Container, Form, FormError, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'
async function handleConnectCalendar() {
  await signIn('google')
}

export default function ConnectCalendar() {


  return (
    <Container>
        <Header>
            <Heading as='strong' >
            Conecte sua agenda!
            </Heading>

            <Text>
            Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.
            </Text>
        </Header>
        <MultiStep size={4} currentStep={2}/>

        <ConnectBox>  

          <ConnectItem>
            <Text>Google Calendar</Text>


            <Button variant='secondary' size='sm' onClick={() => handleConnectCalendar()}>
              Connectar
            </Button>
          </ConnectItem>










        <Button type='submit' >
                Proximo passo

                <ArrowRight/>
            </Button>
        
        </ConnectBox>

    
    </Container>
  )
}

