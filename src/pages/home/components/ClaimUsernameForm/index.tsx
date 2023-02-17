
import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import React from 'react'
import { Form } from './styles'

function ClaimUsernameForm() {
  return (
    <Form as='form'>
        <TextInput size='sm' prefix='call.com/' placeholder='Seu-usuario' />

        <Button size='sm' type='submit'>
            Reservar 
            <ArrowRight/>
        </Button>

    </Form>
  )
}

export default ClaimUsernameForm