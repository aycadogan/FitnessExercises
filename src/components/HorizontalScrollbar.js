import React, { useContext, useState } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box, Typography } from '@mui/material'

import ExerciseCard from './ExerciseCard'
import BodyPart from './BodyPart'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

import all from '../assets/categories/all.png'
import arms from '../assets/categories/arms.png'
import back from '../assets/categories/back.png'
import cardio from '../assets/categories/cardio.png'
import chest from '../assets/categories/chest.png'
import legs from '../assets/categories/legs.png'
import neck from '../assets/categories/neck.png'
import shoulder from '../assets/categories/shoulder.png'
import waist from '../assets/categories/waist.png'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <Typography onClick={() => scrollPrev()} className='right-arrow'>
      <img src={LeftArrowIcon} alt='right-arrow' />
    </Typography>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Typography onClick={() => scrollNext()} className='left-arrow'>
      <img src={RightArrowIcon} alt='right-arrow' />
    </Typography>
  )
}

const HorizontalScrollbar = ({ data, isBodyParts, setBodyPart, bodyPart }) => {
  const [bodyParts, setBodyParts] = useState([
    { image: all, title: 'All' },
    { image: arms, title: 'Lower Arms' },
    { image: back, title: 'Back' },
    { image: cardio, title: 'Cardio' },
    { image: chest, title: 'Chest' },
    { image: legs, title: 'Lower Legs' },
    { image: neck, title: 'Neck' },
    { image: shoulder, title: 'Shoulders' },
    { image: arms, title: 'Upper Arms' },
    { image: legs, title: 'Upper Legs' },
    { image: waist, title: 'Waist' },
  ])

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item, index) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m='0 40px'
        >
          {isBodyParts ? (
            <BodyPart
              image={bodyParts[index].image}
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
