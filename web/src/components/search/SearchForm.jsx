import React, { useReducer, useState } from 'react'
import { Box, Flex } from 'rebass'
import RemoteCheckbox from './RemoteCheckbox'
import SearchBox from './SearchBox'
import TechFilter from './TechFilter'
import Modal from './Modal'
import CodeIcon from '../icons/CodeIcon'
import WalletIcon from '../icons/WalletIcon'
import ChecklistIcon from '../icons/ChecklistIcon'
import FilterButton from './FilterButton'
import CategoryIcon from '../icons/CategoryIcon'

const filterComponents = {
  tech: TechFilter,
}

const initialState = {
  isRemote: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_REMOTE':
      return { ...state, isRemote: action.payload }
    default:
      throw new Error()
  }
}

const SearchForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [selectedFilter, setSelectedFilter] = useState('')

  const toggleFilter = (e) => {
    if (selectedFilter === e.target.id) {
      setSelectedFilter('')
    } else {
      setSelectedFilter(e.target.id)
    }
  }

  const toggleRemote = () =>
    dispatch({ type: 'TOGGLE_REMOTE', payload: !state.isRemote })

  const FilterComponent = selectedFilter && filterComponents[selectedFilter]

  return (
    <Flex as='form' flexDirection='column'>
      <Flex padding='1rem'>
        <SearchBox />
      </Flex>

      <Flex
        flexDirection='row'
        justifyContent='flex-start'
        alignItems='center'
        overflowX='scroll'
        pl='1rem'
      >
        <RemoteCheckbox onToggle={toggleRemote} isRemote={state.isRemote} />
        <FilterButton name='tech'>
          <CodeIcon />
        </FilterButton>

        <FilterButton name='salary'>
          <WalletIcon />
        </FilterButton>

        <FilterButton name='experience'>
          <ChecklistIcon />
        </FilterButton>

        <FilterButton name='category'>
          <CategoryIcon />
        </FilterButton>

        <Box px='1rem' />
      </Flex>

      <Box sx={{ position: 'relative' }}>
        {selectedFilter && (
          <Modal>
            <FilterComponent />
          </Modal>
        )}
      </Box>
    </Flex>
  )
}

SearchForm.propTypes = {}

export default SearchForm
