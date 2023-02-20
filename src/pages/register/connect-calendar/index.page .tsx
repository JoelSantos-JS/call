import { Heading,Text,MultiStep, TextInput, Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { Container, Form, FormError, Header } from '../styles'
import { ConnectBox } from './styles'


function Register() {



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
        <Button type='submit' >
                Proximo passo

                <ArrowRight/>
            </Button>
        
        </ConnectBox>

    
    </Container>
  )
}

export default Register