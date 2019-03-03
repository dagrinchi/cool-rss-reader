import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import validate from 'validate.js'

import { Layer, Box, Text, Button } from 'grommet'
import AtTextInput from '../AtTextInput/AtTextInput';

const constraints = {
  title: {
    presence: true
  },
  url: {
    presence: true,
    url: true
  }
}

class OrNewChannel extends React.Component {
  static propTypes = {
    formSubmit: PropTypes.func.isRequired
  };
  render() {
    const { onClose, formSubmit, handleSubmit, submitting, pristine } = this.props
    return (
      <Layer position="top" onClickOutside={onClose}>
        <Box pad="large" gap="medium">
          <Text>Add new channel</Text>
          <Field component={AtTextInput} name="title" placeholder="Title" />
          <Field component={AtTextInput} name="url" placeholder="Address" />
          <Box direction="row" gap="medium" align="center">
            <Button label="Ok" primary onClick={handleSubmit(formSubmit)} disabled={submitting || pristine} />
            <Button label="Cancel" onClick={onClose} />
          </Box>
        </Box>
      </Layer>
    )
  }
}

export default reduxForm({
  form: 'NEW_CHANNEL_FORM',
  validate: values => validate(values, constraints)
})(OrNewChannel);
