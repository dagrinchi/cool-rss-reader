import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import slugify from 'slugify'

import { Box, Heading } from 'grommet'

import TplApp from '../components/TplApp/TplApp'
import OrChannelsGrid from '../components/OrChannelsGrid/OrChannelsGrid'
import OrNewChannel from '../components/OrNewChannel/OrNewChannel'

const DEFAULT_CHANNELS = [
  {title:"ESPN - NBA", url:"http://www.espn.com/espn/rss/nba/news"},
  {title:"Washington Post - Soccer", url:"http://feeds.washingtonpost.com/rss/rss_soccer-insider"},
]

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
  .button-container {
    align-self: center;
  }
`
class IndexPage extends Component {

  state = { showAddNewChannelLayer: false };

  _newChannelSubmit = (values) => {
    const cookieChannels = cookie.get("channels")
    let channels = []
    if (cookieChannels) {
      channels = JSON.parse(cookieChannels)
    }

    channels.push(values)
    cookie.set("channels", JSON.stringify(channels), { expires: 30 })

    if (window) {
      window.location.reload();
    }
  };

  _removeChannel = (index) => {
    const cookieChannels = cookie.get("channels")
    let channels = []
    if (cookieChannels) {
      channels = JSON.parse(cookieChannels)
    }

    channels.splice(index, 1)
    if (channels.length > 0) {
      cookie.set("channels", JSON.stringify(channels), { expires: 30 })
    } else {
      cookie.remove("channels")
    }   

    if (window) {
      window.location.reload();
    }
  }
  
  static async getInitialProps(ctx) {
    let channels = []
    const cookies = nextCookie(ctx)
    const isCookieChannels = !!cookies.channels
    if (isCookieChannels) {
      channels = JSON.parse(cookies.channels)
    } else {
      channels = DEFAULT_CHANNELS      
    }
    
    channels = channels.map(c => ({
      ...c,
      slug: slugify(c.title, {
        lower: true,
        remove:   /\./i
      })
    }))

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
        <TplApp onAddButton={() => this.setState({ showAddNewChannelLayer: true })}>
          <Container>
            <Heading level="1" className="heading">My Channels</Heading>
            <OrChannelsGrid channels={this.props.channels} onRemoveButton={this._removeChannel} />
          </Container>     
          { this.state.showAddNewChannelLayer && <OrNewChannel formSubmit={this._newChannelSubmit} onClose={() => this.setState({ showAddNewChannelLayer: false })} /> }
        </TplApp>
      </Fragment>
    )
  }
}

export default IndexPage