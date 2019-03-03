import React, { Component } from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import Parser from 'rss-parser'
import { Box, Heading, Image } from 'grommet'

import TplApp from '../components/TplApp/TplApp'
import OrFeedGrid from '../components/OrFeedGrid/OrFeedGrid'

const Container = styled(Box)`
  .heading {
    text-align: center;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;

    .heading {
      text-align: left;
      margin-left: 1em;
    }
  }
`
class ChannelPage extends Component {

  static async getInitialProps(ctx) {
    let channels = []
    let channel = {}
    const cookies = nextCookie(ctx)
    const isCookieChannels = !!cookies.channels
    if (isCookieChannels && ctx.query.index) {
      channels = JSON.parse(cookies.channels)
      channel = channels[ctx.query.index]
    }
    
    if (!channel.url) return {}

    const parser = new Parser()
    try {
      const data = await parser.parseURL(channel.url)
      return { data }
    } catch (err) {
      console.log(err)
    }
    return {}
  }

  render() {
    const { data } = this.props
    return (
      <TplApp onBackButton={() => Router.back()}>
        <Container>
          <Box>
            <Box>
              { (data.image && data.image.url) && <Image src={data.image.url} fit="contain" /> }
            </Box>
            <Heading level="1" className="heading" margin="none">{data.title || ""}</Heading>
          </Box>
          <OrFeedGrid items={data.items} pageSize={6} />
        </Container>             
      </TplApp>
    )
  }
}

export default ChannelPage