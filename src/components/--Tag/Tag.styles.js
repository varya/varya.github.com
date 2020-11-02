import { Tag as ATag } from "antd";
import styled from "styled-components";

const Tag = styled(ATag)`
  && {
    border-radius: 15px;
    text-transform: uppercase;
    font-size: 9px;
    line-height: 20px;
    letter-spacing: 2px;
  }
`;

export const Styled = {
  Tag,
};
