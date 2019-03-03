import React from 'react'

import { Layer, Box, Text, Button, TextInput } from 'grommet'

const OrNewChannel = ({ onClose }) => (
  <Layer position="top" onClickOutside={onClose}>
    <Box pad="large" gap="medium">
      <Text>Add new channel</Text>
      <TextInput name="title" placeholder="Title" focusIndicator />
      <TextInput name="url" placeholder="Address" focusIndicator />
      <Box direction="row" gap="medium" align="center">
        <Button label="Ok" primary onClick={onClose} />
        <Button label="Cancel" onClick={onClose} />
      </Box>
    </Box>
  </Layer>
)

export default OrNewChannel