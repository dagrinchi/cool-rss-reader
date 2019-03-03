import React from 'react'
import PropTypes from 'prop-types'
import { Grommet, Box } from 'grommet'

import AtAppBar from '../AtAppBar/AtAppBar'
import AtButton from '../AtButton/AtButton'

import theme from '../../theme'

const TplApp = (props) => {
  let appBarProps = {
    title: "RSS Reader App"
  }
  if (props.onAddButton) {
    appBarProps["rightButton"] = <AtButton icon={<theme.icons.AddCircle />} onClick={props.onAddButton} />
  }
  if (props.onBackButton) {
    appBarProps["leftButton"] = <AtButton icon={<theme.icons.LinkPrevious />} onClick={props.onBackButton} />
  }
  return (
    <Grommet theme={theme}>
      <theme.fonts.global />
      <AtAppBar {...appBarProps} />   
      <Box style={{ marginTop: "70px" }}>
        {props.children}
      </Box>
    </Grommet>
  )
}

TplApp.propTypes = {
  onAddButton: PropTypes.func,
  onBackButton: PropTypes.func
}

export default TplApp