import React, { Component } from 'react'
import { Grid, Input, Pagination, Segment } from 'semantic-ui-react'

export default class PaginationComponent extends Component {
  state = { activePage: 1 }

  handleInputChange = (e, { value }) => this.setState({ activePage: value })

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    const { activePage } = this.state

    return (

          <Pagination
            activePage={activePage}
            onPageChange={this.handlePaginationChange}
            totalPages={5}
          />
    )
  }
}
