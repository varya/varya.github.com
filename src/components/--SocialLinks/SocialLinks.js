import React from "react";
import theme from "../theme";
import { deepMerge } from "grommet/utils";
import { Facebook, Linkedin, Mail, Twitter } from "grommet-icons";
import { Button, Nav, Grommet } from "grommet";

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
      color: "light-4",
    },
    hover: {
      default: {
        color: "dark-4",
      },
    },
    active: {
      default: {
        color: "dark-4",
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
            color="light-4"
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
