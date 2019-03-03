import React from 'react'
import renderer from 'react-test-renderer'

const DEFAULT_CHANNELS = [
  {title:"ESPN - NBA", url:"http://www.espn.com/espn/rss/nba/news"},
  {title:"Washington Post - Soccer", url:"http://feeds.washingtonpost.com/rss/rss_soccer-insider"},
]

import IndexPage from '../pages/index.js'

describe('Pages', () => {
  describe('Index', () => {
    it('Should match with snapshot', () => {
      const component = renderer.create(<IndexPage channels={DEFAULT_CHANNELS} />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })  
})