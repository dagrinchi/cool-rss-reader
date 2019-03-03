import React from 'react'
import renderer from 'react-test-renderer'

import IndexPage from '../pages/index.js'

describe('Pages', () => {
  describe('Index', () => {
    it('Should match with snapshot', () => {
      const component = renderer.create(<IndexPage />)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })  
})