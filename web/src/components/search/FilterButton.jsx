import React from 'react'
import { Button } from 'rebass'

const FilterButton = ({ name, onClick, children, isActive }) => {
  let color = isActive ? '#A61B1B' : '#2d3436'
  let bgColor = isActive ? '#FFEEEE' : 'white'

  return (
    <Button
      id={name}
      type='button'
      sx={{
        backgroundColor: bgColor,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: isActive ? '#A61B1B' : '#b2bec3',
        borderRadius: 4,
        lineHeight: '1rem',
        padding: '0.375rem',
        color: color,
        fontSize: 14,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        mr: '0.25rem',
        flex: 'none',
        textTransform: 'capitalize',
        svg: {
          mr: '0.25rem',
          height: 16,
          width: 16,
          fill: color,
          stroke: color,
        },
      }}
      onClick={onClick}
    >
      {children}
      {name}
    </Button>
  )
}

export default FilterButton
