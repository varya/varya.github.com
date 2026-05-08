import React from "react";
import styled from "styled-components";

// Aligned with the site's grommet theme:
//   brand   = rgb(236, 78, 75)   — coral
//   accent  = #f8d179            — soft yellow
//   neutral = #85d8f3            — light cyan
// The second triplet are softened/tinted siblings of the same three hues.
const SLOTS = [
  { label: "DS", role: "Prefix", bg: "rgb(236, 78, 75)" },         // brand
  { label: "Category", role: "Type", bg: "#f8d179" },              // accent
  { label: "Group", role: "Context", bg: "#85d8f3" },              // neutral
  { label: "Entity", role: "Property", bg: "rgba(236, 78, 75, 0.4)" },  // brand-soft
  { label: "Modifier", role: "State", bg: "rgba(248, 209, 121, 0.55)" },// accent-soft
  { label: "ID", role: "Value", bg: "rgba(133, 216, 243, 0.55)" }, // neutral-soft
];

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 8px;
  margin: 28px 0;

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }
`;

const Slot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  min-width: 0;
`;

const Chip = styled.div`
  background: ${(p) => p.$bg};
  color: #1a1a1a;
  padding: 14px 8px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  font-family: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  letter-spacing: 0.02em;
  line-height: 1.2;
`;

const Role = styled.div`
  margin-top: 8px;
  font-size: 11px;
  color: #525252;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 600;
`;

const TokenAnatomy = () => (
  <Wrap aria-label="Token name anatomy — six positional parts: DS, Category, Group, Entity, Modifier, ID">
    {SLOTS.map((s) => (
      <Slot key={s.label}>
        <Chip $bg={s.bg}>{s.label}</Chip>
        <Role>{s.role}</Role>
      </Slot>
    ))}
  </Wrap>
);

export default TokenAnatomy;
