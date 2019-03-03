import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Box, Image, Button, Text, Anchor } from 'grommet'

import Link from 'next/link'

const ImgContainer = styled(Box)`
  min-width: initial;
  min-height: initial;
`

const MolChannelCard = (props) => (  
  <Box
    className={props.className}
    elevation="medium"
    width="full"
    height="xsmall"
    direction="row"
    margin="medium">
    <ImgContainer height="xsmall" width="xsmall" pad="small">
      <Image fit="contain" src={props.imageUrl} />    
    </ImgContainer>
    <Box height="xsmall" pad="small">
      <Link href={`/channel?slug=${props.slug}&index=${props.index}`} as={`/channel/${props.index}/${props.slug}`}>
        <Anchor label={(<Text truncate>{props.title}</Text>)} href="javascript:void(0);" />
      </Link>
      <Text margin="none" truncate>{props.description}</Text>
      {props.children}
    </Box>    
  </Box>  
)

MolChannelCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  index: PropTypes.number,
  slug: PropTypes.string,
  description: PropTypes.string
}

export default MolChannelCard