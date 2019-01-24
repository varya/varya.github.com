import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components'
import { grid } from 'styled-components-grid'
import breakpoint from 'styled-components-breakpoint'

import config from "../../../content/meta/config";
import Menu from "../Menu";
import Logo from "../Logo";


const Container = styled.div`
  ${grid({})}
  margin-top: 1em;
  margin-bottom: 2em;
`

const LeftSide = styled.div`
  ${grid.unit({
    size: {
        desktop: 4 / 12
    }
  })}
`
const RightSide = styled.div`
  ${grid.unit({
    size: {
        desktop: 8 / 12
    }
  })}
`

class Header extends React.Component {

  render() {
    const { pages, path } = this.props;


    return (
      <Container>
        <LeftSide>
          <Logo/>
        </LeftSide>
        <RightSide>
          <Menu
            path={path}
            pages={pages}
          />
        </RightSide>

      </Container>
    );
  }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
};

export default Header;
