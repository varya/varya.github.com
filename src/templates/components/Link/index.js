import React, { Component } from 'react'
import styled from 'styled-components'

const LinkS = styled.a`
  color: #3B8DBD;
`

export default class Link extends Component {

  render() {

    const { href } = this.props
    return (
      <LinkS href={href}>{this.props.children}</LinkS>
    )

  }

}
