import React, { Component } from 'react'
import styled from 'styled-components'
import { grid } from 'styled-components-grid'
import breakpoint from 'styled-components-breakpoint'

import Prompt from "../Prompt";

export const Container = styled.div`
  ${grid({})}
`

export const LeftSide = styled.div`
  ${grid.unit({
    size: {
        desktop: 1 / 12
    }
  })}
  ${breakpoint('tablet') `
    order: 3;
  `}
  ${breakpoint('desktop') `
    order: 1;
  `}
`
export const Content = styled.div`
  ${grid.unit({
    size: {
        tablet: 8 / 12,
        desktop: 9 / 12
    }
  })}
  ${breakpoint('tablet') `
    order: 1;
  `}
  ${breakpoint('desktop') `
    order: 2;
  `}
`
export const RightSide = styled.div`
  ${grid.unit({
    size: {
        tablet: 4 / 12,
        desktop: 2 / 12
    }
  })}
  ${breakpoint('tablet') `
    order: 2;
  `}
  ${breakpoint('desktop') `
    order: 3;
  `}
`

export default class Layout extends Component {

  render() {
    return (
      <Container>
        <Content>
          {this.props.children}
        </Content>
        <RightSide>
           Sidebar here
        </RightSide>
        <LeftSide>
         <Prompt />
        </LeftSide>
      </Container>
    )

  }

}
