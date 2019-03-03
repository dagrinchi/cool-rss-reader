import React from 'react'
import { Box, TextInput, Text } from 'grommet'

class AtTextInput extends React.Component {
  render() {
    const { 
      name,
      placeholder,
      input,
      meta: { touched, error }
    } = this.props
    return (
      <Box>
        <TextInput
          name={name}
          placeholder={placeholder}
          focusIndicator
          {...input} />
        { touched && (error && error.map((errorMsg, index) => (<Text color="error" key={index}>{errorMsg}</Text>))) }
      </Box>
    )
  }
}

export default AtTextInput