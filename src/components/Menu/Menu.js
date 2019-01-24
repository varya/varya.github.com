import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styled from "styled-components";
import { colorScheme } from '../Colors/Colors.js';

import FaHome from "react-icons/lib/fa/home";
import FaTag from "react-icons/lib/fa/tag";

const MenuContainer = styled.nav`
  font-size: 1.5em;
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0;
  padding: 0;

  list-style: none;

  display: inline-block;
  zoom: 1;

  margin-right: 1em;
`;

const MenuLink = styled(Link)`
  color: ${colorScheme.primary};
  font-weight: bold;
  text-decoration: none;
  margin-left: 0.25em;
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);

    const pages = props.pages
    .filter(page => page.node.fields.level == 1)
    .map(page => ({
      to: page.node.fields.slug,
      label: page.node.frontmatter.menuTitle
        ? page.node.frontmatter.menuTitle
        : page.node.frontmatter.title
    }));

    this.items = [
      { to: "/", label: "Home", icon: FaHome },
      { to: "/blog/", label: "Blog", icon: FaTag },
      /*{ to: "/design-systems/", label: "Design Systems" },*/
      ...pages
    ];

    this.renderedItems = []; // will contain references to rendered DOM elements of menu
  }

  render() {

    return (
        <MenuContainer>
          <MenuList>
            {this.items.map(item => {
              const Icon = item.icon
              return (
                <MenuItem key={item.label}>
                  {Icon && <Icon />}
                  <MenuLink to={item.to}>
                    {item.label}
                  </MenuLink>
                </MenuItem>
              )}
            )}
          </MenuList>
        </MenuContainer>

    );
  }
}

export default Menu;
