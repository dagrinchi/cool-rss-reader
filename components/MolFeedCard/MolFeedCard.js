import React from 'react'
import styled from 'styled-components'
import { Box, Anchor, Text } from 'grommet'

import moment from 'moment'

const Container = styled(Box)`
  @media (min-width: 1024px) {
    flex-basis: calc(50% - 48px);
  }
`

const MolFeedCard = ({ title, content, isoDate, link, creator }) => (
  <Container elevation="medium" margin="medium" pad="medium" fill>
    <Anchor label={title} href={link} margin={{ bottom: "small"}} target="_blank" />
    <Text>{content}</Text>    
    <Text alignSelf="end">{creator}</Text>
    <Text alignSelf="end" color="gray">{moment(isoDate).fromNow()}</Text>
  </Container>
)

export default MolFeedCard