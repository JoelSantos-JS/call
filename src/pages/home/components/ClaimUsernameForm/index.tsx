
import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormAnnotation } from './styles'
import * as z from 'zod'
import { useRouter } from 'next/router'

const claimUsernameFormSchema = z.object({
  username: z.string().min(2, {message: 'O usuario tem que ter pelo meno  2 letras.'}).regex(/^([a-z\\-]+)$/).transform((username) => username.toLowerCase()),
})



type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

function ClaimUsernameForm() {
  

  const {register, handleSubmit, formState:{errors,isSubmitting}} = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema)
  })

  const router = useRouter()
  async function handlePreSubmit(data: ClaimUsernameFormData) {
    const {username}= data 


   await  router.push(`/register?username=${username}`)
  }


  return (
    <>
   
    <Form as='form' onSubmit={handleSubmit(handlePreSubmit)}>
        <TextInput size='sm' prefix='call.com/' placeholder='Seu-usuario'  {...register('username')}/>

        <Button size='sm' type='submit' disabled={isSubmitting}>
            Reservar 
            <ArrowRight/>
        </Button>
    
    </Form>
      <FormAnnotation>
      <Text size='sm'>
        {errors.username ? errors.username.message : 'Digite o nome do usuario'}

      </Text>
    </FormAnnotation>

    </>
  )
}

export default ClaimUsernameForm