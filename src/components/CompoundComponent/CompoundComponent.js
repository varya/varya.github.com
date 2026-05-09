import React from "react";
import styled from "styled-components";

// Anatomy of a compound component — Card as Root, with dotted sub-components
// (Card.Head, Card.Body, Card.Tail) and the slots that live inside each.
//
// Style notes (matches SpecDrivenFlow / ResearchLoop):
//   brand   = rgb(236, 78, 75)  — coral
//   accent  = #f8d179           — yellow
//   neutral = #85d8f3           — cyan
// Square corners, no border. Section blocks rotate accent → neutral → brand.
// Inside each section, slot/sub-element names render as inline pill tags.
//
// Responsive: each section's inner slot row stacks vertically on phones.

const SECTIONS = [
  {
    label: "Card.Head",
    bg: "#f8d179",
    slots: [
      { kind: "primary", text: "Avatar" },
      { kind: "primary", text: "title · caption" },
      { kind: "secondary", text: "Card.HeadActions" },
      { kind: "secondary", text: "Card.HeadAction" },
    ],
  },
  {
    label: "Card.Body",
    bg: "#85d8f3",
    slots: [
      { kind: "primary", text: "Card.Media" },
      { kind: "primary", text: "Card.Content" },
      { kind: "muted", text: "label · title · subtitle · description" },
    ],
  },
  {
    label: "Card.Tail",
    bg: "rgb(236, 78, 75)",
    slots: [
      { kind: "primary", text: 'Card.Action variant="ghost"' },
      { kind: "primary", text: 'Card.Action variant="primary"' },
    ],
  },
];

const Frame = styled.figure`
  margin: 28px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const Root = styled.div`
  background: rgba(0, 0, 0, 0.04);
  padding: 22px 22px 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const RootHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 4px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
`;

const RootName = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0.01em;
`;

const RootSub = styled.div`
  font-style: italic;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.55);
`;

const Section = styled.div`
  background: ${({ $bg }) => $bg};
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionLabel = styled.div`
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.85);
`;

const Slots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Slot = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 1.3;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  background: ${({ $kind }) =>
    $kind === "muted" ? "transparent" : "rgba(255, 255, 255, 0.85)"};
  color: ${({ $kind }) =>
    $kind === "muted" ? "rgba(0, 0, 0, 0.55)" : "rgba(0, 0, 0, 0.85)"};
  font-style: ${({ $kind }) => ($kind === "muted" ? "italic" : "normal")};
  font-weight: ${({ $kind }) => ($kind === "primary" ? 600 : 400)};
`;

const Divider = styled.div`
  position: relative;
  height: 1px;
  background: rgba(0, 0, 0, 0.12);
  margin: 4px 0;

  &::after {
    content: "Card.Divider";
    position: absolute;
    right: 0;
    top: -16px;
    font-size: 11px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    color: rgba(0, 0, 0, 0.45);
  }
`;

const Caption = styled.figcaption`
  margin-top: 12px;
  text-align: center;
  font-style: italic;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.55);

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.05);
    padding: 1px 6px;
    border-radius: 3px;
  }
`;

const CompoundComponent = () => (
  <Frame aria-label="Anatomy of a compound component — Card as Root with Card.Head, Card.Body, and Card.Tail sub-components, each with its dotted display name">
    <Root>
      <RootHeader>
        <RootName>Card</RootName>
        <RootSub>Root component — the export consumers import</RootSub>
      </RootHeader>

      {SECTIONS.map((section, i) => (
        <React.Fragment key={section.label}>
          <Section $bg={section.bg}>
            <SectionLabel>{section.label}</SectionLabel>
            <Slots>
              {section.slots.map((slot, j) => (
                <Slot key={j} $kind={slot.kind}>
                  {slot.text}
                </Slot>
              ))}
            </Slots>
          </Section>
          {i === 1 && <Divider aria-hidden="true" />}
        </React.Fragment>
      ))}
    </Root>
    <Caption>
      Card as Root + slots — a real Ahua compound. <code>withDisplayNames()</code>{" "}
      sets each sub-component's runtime name to its dotted path, so Storybook
      code snippets render <code>&lt;Card.Head&gt;</code>,{" "}
      <code>&lt;Card.Body&gt;</code>, <code>&lt;Card.Action&gt;</code>{" "}
      faithfully.
    </Caption>
  </Frame>
);

export default CompoundComponent;
