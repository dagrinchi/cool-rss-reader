import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import update from 'immutability-helper'

import { Box } from 'grommet'

const Container = styled(Box)``

class OrFeedGrid extends React.Component {

  _scroll = ev => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (this.state.pages > this.state.currentPage) {
        this.setState(prev => ({
          currentPage: prev.currentPage + 1,
          items: update(prev.items, {$push: this._paginate(this.props.items, prev.currentPage + 1, this.props.pageSize)})
        }))
      }      
    }
  };

  _paginate = (array, page_number, page_size) => {
    --page_number;
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  };

  static defaultProps = {
    pageSize: 6
  };

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      pages: Math.ceil(props.items.length / props.pageSize),
      items: this._paginate(props.items, 1, props.pageSize)
    };
  }
  
  componentDidMount() {
    document.addEventListener("scroll", this._scroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this._scroll);
  }

  render() {
    return (
      <Container direction="row" wrap>
        {
          this.state.items.map((itm, index) => {
            const MolFeedCard = dynamic(() => import('../MolFeedCard/MolFeedCard'), {
              loading: () => <Box pad="medium" fill>Loading...</Box>
            })
            return (
              <MolFeedCard key={index} {...itm} />
            )
          })
        }
      </Container>
    )
  }
}

export default OrFeedGrid