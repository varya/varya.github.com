import {
  Button,
  Grommet,
  Menu as GrommetMenu,
  Nav,
  ResponsiveContext,
} from "grommet";
import PropTypes from "prop-types";
import React from "react";
import Link from "../--Link";
import theme from "../theme";
import { deepMerge } from "grommet/utils";

const menuData = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      // { label: "Speaking", href: "/speaking" },
      { label: "Consultancy", href: "/services/consultancy" },
      { label: "Team supervision", href: "/services/supervision" },
      { label: "Audit of design and development", href: "/services/audit" },
      { label: "Design systems strategy", href: "/services/strategy" },
      {
        label: "Design system and components production",
        href: "/services/development",
      },
      { label: "Workshops", href: "/services/workshops" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Design systems", href: "/design-systems" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const menuTheme = deepMerge(theme, {
  button: {
    disabled: {
      opacity: 1,
      color: "text-xweak",
      border: {
        width: "3px",
      },
    },
    extend: ({ plain, theme, disabled }) =>
      plain &&
      !disabled &&
      `&:hover {
        color: ${theme.global.colors.brand};
        text-decoration: underline;
        background: transparent;
        }
      `,
  },
});

/**
 * Helper function to flatten array of menu items and extend styles accordingly
 *
 * @param {array} arr - menu items array
 * @param {boolean} [isSecondLevel=false] - if an item is located below the first level
 * @returns {array}   new array
 */
function flatten(arr, isSecondLevel = false) {
  return arr
    ? arr.reduce(
        (result, item) => [
          ...result,
          {
            label: item.label,
            href: item.href,
            disabled: !item.href,
            margin: { left: isSecondLevel && "small" },
          },
          ...flatten(item.children, true),
        ],
        []
      )
    : [];
}

/**
 * Basic site navigation.
 *
 * @param {Array} items - array of objects, representing menu items. Items can be nested (will be rendered as submenu)
 *
 */
const Menu = ({ items = menuData, current, mode = "horizontal", ...props }) => {
  return (
    <Grommet theme={menuTheme}>
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <GrommetMenu label="Menu" items={flatten(items)} />
          ) : (
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
          )
        }
      </ResponsiveContext.Consumer>
    </Grommet>
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
      a11yTitle="Navigation Menu"
      dropProps={{ align: { top: "bottom", left: "left" } }}
      {...props}
      items={children.map((child) => Object.assign(child, { plain: true }))}
    >
      <Button plain key={label} {...props} label={label} color="brand" />
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
