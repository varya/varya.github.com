import React from "react";
import styled from "styled-components";

// Schema for the research-driven design loop on the Manychat engagement.
// Visual style matches SpecDrivenFlow: solid brand-coloured blocks, square
// corners, no border. Stages rotate through accent → neutral → brand →
// accent. A trailing "loop back" cell with a ↻ glyph closes the cycle —
// the loop reads as a flow that ends by returning to the start.

const STAGE_COLORS = ["#f8d179", "#85d8f3", "rgb(236, 78, 75)", "#f8d179"];

const STAGES = [
  {
    title: "Designer's initial framing",
    body: ["Product-context view —", "where the friction sits"],
  },
  {
    title: "Research",
    body: [
      "Open-source DS source,",
      "Manychat product codebase,",
      "DOM, RFCs, changelogs",
    ],
  },
  {
    title: "Designer's informed proposal",
    body: [
      "Grounded in product reality,",
      "field knowledge,",
      "system constraints",
    ],
  },
  {
    title: "Joint spec",
    body: [
      "Co-authored: designer,",
      "tech lead, developers",
      "walk through it together",
    ],
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
  min-height: 160px;
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

const LoopCell = styled.div`
  flex: 0 0 auto;
  min-width: 84px;
  padding: 24px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.6);

  @media (max-width: 720px) {
    flex-direction: row;
    gap: 10px;
    padding: 14px 16px;
    min-height: 0;
  }
`;

const LoopGlyph = styled.div`
  font-size: 28px;
  line-height: 1;
  font-weight: 300;

  &::before {
    content: "↻";
  }
`;

const LoopLabel = styled.div`
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
`;

const Caption = styled.div`
  margin-top: 12px;
  text-align: center;
  font-style: italic;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.55);
`;

const ResearchLoop = () => (
  <figure
    style={{ margin: "28px 0" }}
    aria-label="Research loop — designer's framing, research, designer's informed proposal, joint spec, repeated"
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
      <Arrow aria-hidden="true" />
      <LoopCell>
        <LoopGlyph aria-hidden="true" />
        <LoopLabel>Back to framing</LoopLabel>
      </LoopCell>
    </Wrap>
    <Caption>
      Repeated several dozen times across the engagement.
    </Caption>
  </figure>
);

export default ResearchLoop;
