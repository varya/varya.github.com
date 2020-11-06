import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Button as AntButton, Tooltip as AntTooltip } from "antd";
import {
  TwitterSquareFilled,
  FacebookFilled,
  LinkedinFilled,
  MailFilled,
} from "@ant-design/icons";

import { colors } from "../tokens";

/**
 * Social links list
 *
 */

const StyledSocialLinks = styled.div`
  display: flex;
`;
const StyledIconButton = styled(AntButton)`
  color: ${colors.socialIcon.primary};
  margin-right: 15px;
  &:last-child {
    margin-right: 0px;
  }
  & > * {
    font-size: 24px;
  }
  &:hover,
  &:focus {
    color: ${colors.socialIcon.active};
  }
`;

const socialLinksData = [
  {
    title: "Email",
    icon: <MailFilled />,
    href: "mailto:mail@varya.me",
  },
  {
    title: "Twitter",
    icon: <TwitterSquareFilled />,
    href: "https://twitter.com/varya_en",
  },
  {
    title: "Linkedin",
    icon: <LinkedinFilled />,
    href: "https://www.linkedin.com/in/varyastepanova/",
  },
  {
    title: "Facebook",
    icon: <FacebookFilled />,
    href: "http://www.facebook.com/varvara.stepanova.9",
  },
];

const SocialLinks = ({ links = socialLinksData }) => {
  return (
    <StyledSocialLinks>
      {links.map((link) => (
        <AntTooltip key={link.href} title={link.title}>
          <StyledIconButton type="link" icon={link.icon} href={link.href} />
        </AntTooltip>
      ))}
    </StyledSocialLinks>
  );
};

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.node,
      href: PropTypes.string,
    })
  ),
};

export default SocialLinks;
