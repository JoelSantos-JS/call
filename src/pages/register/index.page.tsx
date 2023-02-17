import { Heading,Text,MultiStep, TextInput, Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { Container, Form, FormError, Header } from './styles'
import {zodResolver} from '@hookform/resolvers/zod'

import  * as z from 'zod'
import { useRouter } from 'next/router'

const registerFormSchema=  z.object({
    username: z.string().min(2, {message: 'O usuario tem que ter pelo meno  2 letras.'}).regex(/^([a-z\\-]+)$/).transform((username) => username.toLowerCase()),
    name: z.string().min(3,  {message: 'O usuario tem que ter pelo meno  3 letras.'})
})


type RegisterFormData = z.infer<typeof registerFormSchema>

function Register() {
    const {register,handleSubmit,setValue,formState: {errors,isSubmitting}} = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema)
    })

    const router = useRouter()

    useEffect(() => {
        if(router.query?.username) {
            setValue('username' , String( router.query?.username))
        }

    },[router.query?.username, setValue])

    async function handleRegister(data: RegisterFormData) {
        console.log(data)
    }

  return (
    <Container>
        <Header>
            <Heading as='strong' >
                Seja Bem-vindo ao Call!
            </Heading>

            <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
            </Text>
        </Header>
        <MultiStep size={4} currentStep={1}/>


        <Form as='form' onSubmit={handleSubmit(handleRegister)}>
            <label>
                <Text size='sm'>Nome do usuario</Text>
                <TextInput prefix='call.com/' placeholder='seu-usuario' {...register('username')}/>

                {errors.username && (
                    <FormError >{errors.username.message}</FormError>
                )}
            </label>
            <label>
                <Text size='sm'>Nome Completo</Text>
                <TextInput  placeholder='Seu nome' {...register('name')}/>
                {errors.name && (
                    <FormError >{errors.name.message}</FormError>
                )}
            </label>

            <Button type='submit' disabled={isSubmitting }>
                Proximo passo

                <ArrowRight/>
            </Button>

        </Form>
    </Container>
  )
}

export default Register