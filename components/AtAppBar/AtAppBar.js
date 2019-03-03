import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Box, Heading } from 'grommet'

import Head from 'next/head'

const Container = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

const AtAppBar = (props) => (
  <Container
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
  >
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    { props.leftButton ? props.leftButton : <div style={{ width:"48px" }}></div>}
    <Heading level="2" margin="none">{props.title}</Heading>    
    { props.rightButton ? props.rightButton : <div style={{ width:"48px" }}></div> }
  </Container>
)

AtAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  leftButton: PropTypes.object,
  rightButton: PropTypes.object,
}

export default AtAppBar