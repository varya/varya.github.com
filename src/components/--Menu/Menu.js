import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Nav as GrommetNav, Menu as GrommetMenu, Button } from "grommet";
import Link from "../--Link";
// const { SubMenu } = AntMenu;

const menuData = [
  {
    label: "Services",
    children: [
      { label: "Speaking", href: "/speaking" },
      { label: "Consultancy", href: "/consultancy" },
      { label: "Workshops", href: "/workshops" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Design systems", href: "/design-systems" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/**
 * Basic site navigation.
 *
 * @param {Array} items - array of objects, representing menu items. Items can be nested (will be rendered as submenu)
 *
 */
const Menu = ({ items = menuData, current, mode = "horizontal", ...props }) => {
  return (
    <GrommetNav
      justify="end"
      direction="row"
      gap="medium"
      selectedKeys={current}
      mode={mode}
      {...props}
    >
      {items.map((item) => (
        <MenuItem item={item} key={item.label} />
      ))}
    </GrommetNav>
  );
};

/**
 * Menu Item.
 * Recursively resolves to Link or Submenu with nested Items
 *
 * @param {String} item.label - Menu item name to display; required
 * @param {String} item.href - Path to the page in case item represents a link
 * @param {Array} item.childen - array of objects, representing nested menu items
 *
 */
const MenuItem = ({ item, ...props }) => {
  const { label, href, children = [] } = item;
  return children.length > 0 ? (
    <GrommetMenu
      a11yTitle="Navigation Menu"
      dropProps={{ align: { top: "bottom", right: "right" } }}
      label={label}
      items={children}
      {...props}
    />
  ) : (
    // <Anchor key={label} {...props}>
    <Link key={label} to={href} {...props}>
      <Button plain hoverIndicator label={label} />
    </Link>
    // </AntMenu.Item>
  );
};

const StyledMenu = styled(Menu)``;

MenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    children: PropTypes.array,
  }),
};
Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      children: PropTypes.array,
    })
  ),
  current: PropTypes.string,
  mode: PropTypes.string,
};

export default StyledMenu;
