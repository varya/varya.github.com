import React from "react";
import styled from "styled-components";

// Schema for the spec-driven definition method.
//
// Visual style matches the project tiles on /projects-portfolio/:
// solid brand-coloured blocks, square corners, no border. The four stages
// rotate through the site's three brand hues (accent → neutral → brand →
// accent), the same accent/neutral/brand rotation projects-portfolio.js
// uses for its Widget tiles.
//
//   brand   = rgb(236, 78, 75)  — coral
//   accent  = #f8d179           — yellow
//   neutral = #85d8f3           — cyan
//
// Responsive: horizontal row on desktop, vertical stack on phones; the arrow
// glyph between stages flips from "→" to "↓" at the mobile breakpoint.

const STAGE_COLORS = ["#f8d179", "#85d8f3", "rgb(236, 78, 75)", "#f8d179"];

const STAGES = [
  {
    title: "Spec",
    body: ["Interface, behaviour,", "edge cases — written", "in plain language"],
  },
  {
    title: "Walkthrough",
    body: ["Designer + tech lead", "+ developers argue", "about the spec"],
  },
  {
    title: "Test plan",
    body: ["Plain-English list", "becomes the test file", "almost verbatim"],
  },
  {
    title: "Implementation",
    body: ["Often a no-op once", "the conversation", "is done"],
  },
];

const Wrap = styled.div`
  margin: 28px 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 14px;
  }
`;

const Stage = styled.div`
  flex: 1 1 0;
  min-width: 0;
  background: ${({ $bg }) => $bg};
  padding: 24px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  min-height: 140px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.85);
`;

const Body = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.4;
`;

const Arrow = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.45);
  font-size: 22px;
  line-height: 1;
  font-weight: 300;
  user-select: none;

  &::before {
    content: "→";
  }

  @media (max-width: 720px) {
    height: 12px;
    &::before {
      content: "↓";
    }
  }
`;

const Caption = styled.div`
  margin-top: 12px;
  text-align: center;
  font-style: italic;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.55);
`;

const SpecDrivenFlow = () => (
  <figure
    style={{ margin: "28px 0" }}
    aria-label="Spec-driven flow — Spec, Walkthrough, Test plan, Implementation"
  >
    <Wrap>
      {STAGES.map((s, i) => (
        <React.Fragment key={s.title}>
          <Stage $bg={STAGE_COLORS[i % STAGE_COLORS.length]}>
            <Title>{s.title}</Title>
            <Body>
              {s.body.map((line, j) => (
                <div key={j}>{line}</div>
              ))}
            </Body>
          </Stage>
          {i < STAGES.length - 1 && <Arrow aria-hidden="true" />}
        </React.Fragment>
      ))}
    </Wrap>
    <Caption>
      Disagreements surface and resolve before any code is written.
    </Caption>
  </figure>
);

export default SpecDrivenFlow;
