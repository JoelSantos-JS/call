import {styled} from '@ignite-ui/react'


export  const Container = styled('div' ,  {
 maxWidth: 'calc(100vw - (100vw -1160px) ) / 2',
 marginLeft: 'auto',
 height: '100vh',
 display: 'flex',
 alignItems: 'center',
 justifyItems: 'center',
 gap: '$20',
 overflow: 'hidden'
})


export const Hero = styled('div', {
    maxWidth: 480,
    padding: '0 $10',




})
export const Preview = styled('div', {
    paddingRight: '$8',
    overflow: 'hidden',


    '@media(max-width: 600px)': {
        display :'none'
    }
})