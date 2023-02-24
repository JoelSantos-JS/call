import { getWeekDays } from '@/utils/get-week-days'
import { zodResolver } from '@hookform/resolvers/zod'
import { Heading,Text,MultiStep, TextInput, Button, Checkbox } from '@ignite-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { ArrowRight } from 'phosphor-react'


import React, { useEffect } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Container, Form, FormError, Header } from '../styles'
import { IntervalBox, IntervalDay, IntervalInputs, IntervalItem, IntervalsContainer } from './styles'


const timeIntervalFormSchema = z.object({
    intervals: z.array(z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string()
    })).length(7).transform(intervals => intervals.filter(interval => interval.enabled))
    .refine(intervals =>  intervals.length > 0 ,  {
        message: 'Tem que ter ao menos 1 selecionado'
    })
})

type TimeIntervalsFormData = z.infer<typeof timeIntervalFormSchema>

export default function timeIntervals() {
    const {register,control,handleSubmit ,watch,formState:{
        isSubmitting,
     
        errors,
    }} = useForm({
        resolver: zodResolver(timeIntervalFormSchema),
        defaultValues: {
            intervals: [
                {weekDay: 0 , enabled:false, startTime: '08:00', endTime: '18:00'},
                {weekDay: 1 , enabled:false, startTime: '08:00', endTime: '18:00'},
                {weekDay: 2 , enabled:false, startTime: '08:00', endTime: '18:00'},
                {weekDay: 3 , enabled:false, startTime: '08:00', endTime: '18:00'},
                {weekDay: 4 , enabled:false, startTime: '08:00', endTime: '18:00'},
                {weekDay: 5 , enabled:false, startTime: '08:00', endTime: '18:00'},
                {weekDay: 6 , enabled:false, startTime: '08:00', endTime: '18:00'},
                
            ]
        },
    })


    const {fields} = useFieldArray({
        control,
        name: 'intervals'
    })

    const weekDays = getWeekDays()
    const intervals = watch('intervals')


async function handleSetTimeIntervals(data: TimeIntervalsFormData) {
    console.log(data)
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

        

        <IntervalBox as='form' onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalsContainer>
           
            {fields.map((field, index) => {
                return (
                    <IntervalItem key={field.id}>
                    <IntervalDay>
                        <Controller control={control} render={({field}) => {
                           return(
                            <Checkbox onCheckedChange={checked => {
                                field.onChange(checked)
                            }} />
                           )
                        }} name={`intervals.${index}.enabled`} />

                       
                        <Text>{weekDays[field.weekDay]}</Text>
                    </IntervalDay>
                    <IntervalInputs>
                    <TextInput size='sm' type='time' step={60} disabled={intervals[index].enabled === false} {...register(`intervals.${index}.startTime`)}/>
                    <TextInput size='sm' type='time' step={60} disabled={intervals[index].enabled === false} {...register(`intervals.${index}.endTime`)} />
                        
                  
                    </IntervalInputs>
                </IntervalItem>
                )
            })}
        </IntervalsContainer>

                {errors.intervals && (
                    <FormError >{errors.intervals.message}</FormError>
                )}
        <Button >
            Proximo Passo
            <ArrowRight/>
        </Button>
        </IntervalBox>
    </Container>
  )
}

