import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'Yes', value: 'Yes', text: 'Yes' },
  { key: 'No', value: 'No', text: 'No' },
]

const DropdownComponent = () => (
  <Dropdown
    placeholder='Location'
    fluid
    search
    selection
    options={countryOptions}
    icon='dropdown'
    compact={false}
  />
)

export default DropdownComponent
