import React from 'react'
import PropTypes from 'prop-types'
import { Grommet, Box } from 'grommet'

import AtAppBar from '../AtAppBar/AtAppBar'
import AtButton from '../AtButton/AtButton'

import theme from '../../theme'

const TplApp = (props) => (
  <Grommet theme={theme} full>
    <Box fill>
      <AtAppBar title="RSS Reader App">
        <AtButton icon={<theme.icons.Rss />} onClick={() => {}} />
      </AtAppBar>
      {props.children}
    </Box>
  </Grommet>
)

TplApp.propTypes = {}

export default TplApp