import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

import all from '../assets/categories/all.png'
import arms from '../assets/categories/arms.png'
import back from '../assets/categories/back.png'
import cardio from '../assets/categories/cardio.png'
import chest from '../assets/categories/chest.png'
import legs from '../assets/categories/legs.png'
import neck from '../assets/categories/neck.png'
import shoulder from '../assets/categories/shoulder.png'
import waist from '../assets/categories/waist.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={
        bodyPart === item
          ? {
              borderTop: '4px solid #DE6D6A',
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
          : {
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
      }
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      }}
    >
      <img
        src={Icon}
        alt='dumbbell'
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize='24px'
        fontWeight='bold'
        color='#3A1212'
        textTransform='capitalize'
      >
        {' '}
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart
