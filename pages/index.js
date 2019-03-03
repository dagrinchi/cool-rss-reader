import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import Parser from 'rss-parser'
import slugify from 'slugify'

import { Box } from 'grommet'

import theme from '../theme'

import TplApp from '../components/TplApp/TplApp'
import OrChannelsGrid from '../components/OrChannelsGrid/OrChannelsGrid'
import OrNewChannel from '../components/OrNewChannel/OrNewChannel'
import AtButton from '../components/AtButton/AtButton'

const DEFAULT_CHANNELS = [
  {title:"ESPN - NBA", url:"http://www.espn.com/espn/rss/nba/news"},
  {title:"Washington Post - Soccer", url:"http://feeds.washingtonpost.com/rss/rss_soccer-insider"},
  {title:"NYTimes - Football", url:"https://www.nytimes.com/services/xml/rss/nyt/ProFootball.xml"},
]

const Container = styled(Box)`
  @media screen and (min-width: 1280px) {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .button-container {
    align-self: center;
  }
`
class IndexPage extends Component {

  state = { showAddNewChannelLayer: false };
  
  static async getInitialProps(ctx) {
    let qChannels = []
    const cookies = nextCookie(ctx)
    const isCookieChannels = !!cookies.channels
    if (isCookieChannels) {
      qChannels = JSON.parse(cookies.channels)
    } else {
      qChannels = DEFAULT_CHANNELS      
    }
    
    let channels = []
    for (let i = 0; i < qChannels.length; i++) {
      const parser = new Parser()
      try {
        const feed = await parser.parseURL(qChannels[i].url)
        channels.push({ ...feed, slug: slugify(feed.title, {
          lower: true,
          remove:   /\./i
        }) })
      } catch (err) {
        console.log(err)
      }          
    }
    return { channels, isCookieChannels }
  }

  componentDidMount() {
    const { isCookieChannels } = this.props
    if (!isCookieChannels) {
      cookie.set("channels", JSON.stringify(DEFAULT_CHANNELS), { expires: 30 })
    }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <theme.fonts.global />
        <TplApp>
          <Container>
            <OrChannelsGrid channels={this.props.channels} />
            <Box width="small" className="button-container">
              <AtButton
                icon={<theme.icons.AddCircle />}
                label="Add channel"
                onClick={() => this.setState({ showAddNewChannelLayer: true })}
                primary />  
            </Box>     
          </Container>     
          { this.state.showAddNewChannelLayer && <OrNewChannel onClose={() => this.setState({ showAddNewChannelLayer: false })} /> }
        </TplApp>
      </Fragment>
    )
  }
}

export default IndexPage