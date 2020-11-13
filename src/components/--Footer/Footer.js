import { Button, Footer as GrommetFooter, Grommet, Nav, Text } from "grommet";
import { Facebook, Linkedin, Mail, Twitter } from "grommet-icons";
import React from "react";

/**
 * Footer component
 *
 */

const socialLinks = [
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

const theme = {
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
          horizontal: "16px",
        },
      },
    },
  },
};

const Footer = () => {
  return (
    <Grommet theme={theme}>
      <GrommetFooter responsive basis="full" align="end">
        <Text color="text-xweak" size="small">
          © Varvara Stepanova {new Date().getFullYear()}
        </Text>
        <Nav direction="row" gap="xxsmall">
          {socialLinks.map((link) => (
            <Button
              size="medium"
              key={link.title}
              icon={link.icon}
              a11yTitle={link.title}
              href={link.href}
            />
          ))}
        </Nav>
      </GrommetFooter>
    </Grommet>
  );
};

export default Footer;
