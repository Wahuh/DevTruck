import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Input, Label } from '@rebass/forms'

const RemoteCheckbox = ({ onToggle, isRemote }) => (
  <Label
    display='flex'
    flexDirection='row'
    alignItems='center'
    htmlFor='remote'
    sx={{
      fontSize: 14,
      mr: '0.25rem',
      border: '1px solid #b2bec3',
      borderRadius: 4,
      color: '#2d3436',
      padding: '0.375rem',
      lineHeight: '1rem',
      width: 'fit-content',
      flex: 'none',
    }}
  >
    <Input
      type='checked'
      id='remote'
      name='remote'
      checked={isRemote}
      onChange={onToggle}
      sx={{
        height: 14,
        width: 14,
        borderRadius: 4,
        borderColor: '#2d3436',
        mr: '0.25rem',
        padding: 0,
      }}
    />
    Remote
  </Label>
)

RemoteCheckbox.propTypes = {
  isRemote: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default RemoteCheckbox
