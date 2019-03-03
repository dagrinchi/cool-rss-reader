import React from 'react'
import styled from 'styled-components'
import { Button as GButton } from 'grommet'

const Button = styled(GButton)`
  max-width: 200px;
  &.remove-button {
    max-width: 130px;
    height: 32px;
    align-self: flex-end;
    padding: 0px 18px;
  }
`

const AtButton = (props) => (
  <Button {...props} />
)

export default AtButton