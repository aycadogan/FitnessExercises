import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Lottie from 'react-lottie'
import data from './data.json'

const HeroBanner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className='landing-page'>
      <div className='text-zone'>
        <Box
          sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
          position='relative'
          p='20px'
        >
          <Typography color='#DE6D6A' fontWeight='600' fontSize='26px'>
            Sports International
          </Typography>
          <Typography
            fontWeight={700}
            sx={{ fontSize: { lg: '44px', xs: '40px' } }}
            mb='23px'
            mt='30px'
          >
            Move, Sweat <br />
            And Repeat
          </Typography>
          <Typography fontSize='22px' lineHeight='35px'>
            Check out the most effective exercises personalized to you
          </Typography>
          <Stack>
            <a
              href='#exercises'
              style={{
                marginTop: '45px',
                textDecoration: 'none',
                width: '200px',
                textAlign: 'center',
                background: '#382F77',
                padding: '14px',
                fontSize: '22px',
                textTransform: 'none',
                color: 'white',
                borderRadius: '4px',
              }}
            >
              Explore Exercises
            </a>
          </Stack>
        </Box>
      </div>
      <div className='lottie'>
        <Lottie options={defaultOptions} height={400} width={600} />
      </div>
    </div>
  )
}

export default HeroBanner
