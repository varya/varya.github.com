import { Button, Menu as GrommetMenu, Nav } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import Link from "../--Link";

const menuData = [
  { label: "Home", href: "/" },
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
    <Nav
      align="center"
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
    </Nav>
  );
};

/**
 * Menu Item.
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
      style={{ paddingRight: 0 }}
      // label={label}
      a11yTitle="Navigation Menu"
      dropProps={{ align: { top: "bottom", left: "left" } }}
      {...props}
      items={children.map((child) => Object.assign(child, { plain: true }))}
    >
      <Button plain key={label} {...props} label={label} />
    </GrommetMenu>
  ) : (
    <Button plain as={Link} key={label} to={href} {...props} label={label} />
  );
};

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

export default Menu;
