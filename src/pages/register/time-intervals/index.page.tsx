import { Heading,Text,MultiStep, TextInput, Button, Checkbox } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'


import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Container, Form, FormError, Header } from '../styles'
import { IntervalBox, IntervalDay, IntervalInputs, IntervalItem, IntervalsContainer } from './styles'


const timeIntervalFormSchema = z.object({

})

export default function timeIntervals() {
    const {register,handleSubmit,formState:{
        isSubmitting,
        errors,
    }} = useForm()


async function handleSetTimeIntervals() {
    
}

  return (
    <Container>
        <Header>
            <Heading as='strong' >
            Quase lá
            </Heading>

            <Text>
            Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.
            </Text>
        </Header>
        <MultiStep size={4} currentStep={3}/>

        

        <IntervalBox as='form'>
        <IntervalsContainer>
            <IntervalItem>
                <IntervalDay>
                    <Checkbox/>
                    <Text>Segunda feira</Text>
                </IntervalDay>
                <IntervalInputs>
                <TextInput size='sm' type='time' step={60} />
                <TextInput size='sm' type='time' step={60} />
                    
              
                </IntervalInputs>
            </IntervalItem>
            <IntervalItem>
                <IntervalDay>
                    <Checkbox/>
                    <Text>Terça feira</Text>
                </IntervalDay>
                <IntervalInputs>
                <TextInput size='sm' type='time' step={60} />
                <TextInput size='sm' type='time' step={60} />
                    
              
                </IntervalInputs>
            </IntervalItem>
            <IntervalItem>
                <IntervalDay>
                    <Checkbox/>
                    <Text>Quarta feira</Text>
                </IntervalDay>
                <IntervalInputs>
                <TextInput size='sm' type='time' step={60} />
                <TextInput size='sm' type='time' step={60} />
                    
              
                </IntervalInputs>
            </IntervalItem>
        </IntervalsContainer>

        <Button type='submit'>
            Proximo Passo
            <ArrowRight/>
        </Button>
        </IntervalBox>
    </Container>
  )
}

