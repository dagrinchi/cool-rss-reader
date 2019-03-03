import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

import MolChannelCard from '../MolChannelCard/MolChannelCard'

const OrChannelsGrid = (props) => (
  <Box
    direction="row"    
    wrap>
    {
      props.channels.map(c => (
        <MolChannelCard
          key={c.slug}
          title={c.title || ""}
          description={c.description || ""}
          imageUrl={(c.image && c.image.url) ? c.image.url : "https://dummyimage.com/100x100/7D52D8/fff.png"}
          slug={c.slug} />
      ))
    }
  </Box>
)

OrChannelsGrid.propTypes = {
  channels: PropTypes.array.isRequired
}

export default OrChannelsGrid