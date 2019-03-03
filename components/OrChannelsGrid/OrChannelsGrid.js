import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

import MolChannelCard from '../MolChannelCard/MolChannelCard'
import AtButton from '../AtButton/AtButton'
import theme from '../../theme'

const Container = styled(Box)`
  @media (min-width: 1024px) {
    .channel-card {
      flex-basis: calc(50% - 48px);
    }
  }
`

const OrChannelsGrid = (props) => (
  <Container
    direction="row"    
    wrap>
    {
      props.channels.map((c, index) => (
        <MolChannelCard
          className="channel-card"
          key={index}
          title={c.title || "Lorem ipsum"}
          description={c.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
          index={index}
          imageUrl={(c.image && c.image.url) ? c.image.url : "https://dummyimage.com/100x100/228BE6/fff.png"}
          slug={c.slug}>
          <AtButton className="remove-button" icon={<theme.icons.SubtractCircle />} onClick={() => props.onRemoveButton(index)} />
        </MolChannelCard>
      ))
    }
  </Container>
)

OrChannelsGrid.propTypes = {
  channels: PropTypes.array.isRequired,
  onRemoveButton: PropTypes.func
}

export default OrChannelsGrid