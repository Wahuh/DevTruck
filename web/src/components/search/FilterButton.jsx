import React from 'react'
import { Button } from 'rebass'

const FilterButton = ({ name, onClick, children }) => (
  <Button
    id={name}
    type='button'
    sx={{
      border: '1px solid grey',
      borderRadius: 4,
      lineHeight: '1rem',
      padding: '0.375rem',
      color: 'black',
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
      },
    }}
    onClick={onClick}
  >
    {children}
    {name}
  </Button>
)
export default FilterButton
