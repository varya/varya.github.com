import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Menu as AntMenu } from "antd";
import Link from "../--Link";
const { SubMenu } = AntMenu;

const menuData = [
  {
    label: "Services",
    children: [
      { label: "Speaking", path: "/speaking" },
      { label: "Consultancy", path: "/consultancy" },
      { label: "Workshops", path: "/workshops" },
    ],
  },
  { label: "Projects", path: "/projects" },
  { label: "Design systems", path: "/design-systems" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

/**
 * Basic site navigation.
 *
 * @param {Array} items - array of objects, representing menu items. Items can be nested (will be rendered as submenu)
 *
 */
const Menu = ({ items = menuData, current, mode = "horizontal", ...props }) => {
  return (
    <AntMenu selectedKeys={current} mode={mode} {...props}>
      {items.map((item) => (
        <StyledMenuItem item={item} key={item.label} />
      ))}
    </AntMenu>
  );
};

/**
 * Menu Item.
 * Recursively resolves to Link or Submenu with nested Items
 *
 * @param {String} item.label - Menu item name to display; required
 * @param {String} item.path - Path to the page in case item represents a link
 * @param {Array} item.childen - array of objects, representing nested menu items
 *
 */
const MenuItem = ({ item, ...props }) => {
  const { label, path, children = [] } = item;
  return children.length > 0 ? (
    <SubMenu title={label} {...props}>
      {children.map((child) => {
        const { label } = child;
        return <MenuItem key={label} item={child} />;
      })}
    </SubMenu>
  ) : (
    <AntMenu.Item key={label} {...props}>
      <Link to={path}>{label}</Link>
    </AntMenu.Item>
  );
};

const StyledMenuItem = styled(MenuItem)`
  /* &,
  & > a {
    color: red;
  } */
`;

const StyledMenu = styled(Menu)``;

MenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string,
    children: PropTypes.array,
  }),
};
Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
      children: PropTypes.array,
    })
  ),
  current: PropTypes.string,
  mode: PropTypes.string,
};

export default StyledMenu;
