import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading } from 'grommet'

import Head from 'next/head'

const AtAppBar = (props) => (
  <Box
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
    </Head>
    <Heading level="2" margin="none">{props.title}</Heading>
    {props.children}
  </Box>
)

AtAppBar.propTypes = {
  title: PropTypes.string.isRequired
}

export default AtAppBar