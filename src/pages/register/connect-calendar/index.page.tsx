import { Heading,Text,MultiStep, TextInput, Button } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'
import React, { useEffect } from 'react'

import { Container, Form, FormError, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'
async function handleConnectCalendar() {
  await signIn('google')
}

export default function ConnectCalendar() {
  const session = useSession()
  const router =useRouter()


  const hasAuthError = !!router.query.error
  const isSignedIn= session.status === 'authenticated' 


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


     {
      isSignedIn ? (
        <Button size='sm' disabled>
            Connectado
            <Check/>
        </Button>
      ) : (
        <Button variant='secondary' size='sm' onClick={() => handleConnectCalendar()}>
        Connectar
      </Button>
      )
     }
          </ConnectItem>


          {hasAuthError && (
            <AuthError size='sm'>
            Falha ao se conectar a google , verifique se voce habilitou todas as permissoes.
            </AuthError>
          )}







        <Button type='submit'  disabled={!isSignedIn}>
                Proximo passo

                <ArrowRight/>
            </Button>
        
        </ConnectBox>

    
    </Container>
  )
}

