import React, { useState } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const Dropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!dropdownOpen)
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret id="apply">
          Font Size
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Choose your font size:</DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          onClick={(e) => {
            e.preventDefault()
            props.alterStyle('small-style.css')
          }}
        >
              Small
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          onClick={(e) => {
            e.preventDefault()
            props.alterStyle('medium-style.css')
          }}
        >
              Medium
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          onClick={(e) => {
            e.preventDefault()
            props.alterStyle('large-style.css')
          }}
        >
            Large
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  )
}
export default Dropdown
