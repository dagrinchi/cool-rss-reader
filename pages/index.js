import React, { Component } from 'react'
import Head from 'next/head'
class IndexPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>My COOL RSS Reader!</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      </div>
    )
  }
}

export default IndexPage