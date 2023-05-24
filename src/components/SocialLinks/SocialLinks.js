import React from "react";

import { Button, Grommet, Nav } from "grommet";
import { deepMerge } from "grommet/utils";
import { Facebook, Linkedin, Mail, Twitter } from "grommet-icons";

import theme from "../theme";

/**
 * Social buttons
 *
 */

const socialLinksData = [
  {
    title: "Email",
    icon: <Mail />,
    href: "mailto:mail@varya.me",
  },
  {
    title: "Twitter",
    icon: <Twitter />,
    href: "https://twitter.com/varya_en",
  },
  {
    title: "Linkedin",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/varyastepanova/",
  },
  {
    title: "Facebook",
    icon: <Facebook />,
    href: "http://www.facebook.com/varvara.stepanova.9",
  },
];

const socialLinksTheme = deepMerge(theme, {
  button: {
    default: {
      color: "dark-4",
    },
    hover: {
      default: {
        color: "accent",
      },
    },
    active: {
      default: {
        color: "accent",
      },
    },
    size: {
      medium: {
        pad: {
          horizontal: "12px",
        },
      },
    },
  },
});

const SocialLinks = (props) => {
  return (
    <Grommet theme={socialLinksTheme}>
      <Nav responsive direction="row" justify="center" gap="xxsmall" {...props}>
        {socialLinksData.map((link) => (
          <Button
            size="medium"
            key={link.title}
            icon={link.icon}
            a11yTitle={link.title}
            href={link.href}
          />
        ))}
      </Nav>
    </Grommet>
  );
};

export default SocialLinks;
