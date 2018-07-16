import PropTypes from "prop-types";
import React from "react";

import { Container, LeftSide, Content, RightSide } from "../components/Layout/Layout";
import Prompt from "../components/Prompt";

class IndexPage extends React.Component {

  render() {

    return (
      <Container>
        <Content>
<div><p>I am a design systems specialist and a front-end developer originally from the Utmost North
(<a href="http://maps.yandex.com/-/CVR3nIPf">Petrozavodsk</a>,
Karelia); currently living in Helsinki
and working for <a href="https://www.intergalactico.io/">Intergalactico – Nordcloud Design Studio</a>.<br/>
Before, I had been living Amsterdam for less than a year and previously in
<a href="http://images.yandex.com/yandsearch?text=Moscow">Moscow</a>, Russia for 5 years
and working for
<a href="http://www.yandex.com/">Yandex</a>.<br/>
According to official papers, my name is <code>Varvara Stepanova</code>, although most people just call me <code>Varya</code>.</p>
<p>More than 4 years I was a member of
the <a href="http://bem.info/">BEM</a> team.
In there, I worked on  open-sourcing the full technological stack that powers the Yandex UI framework.
As a BEM adept, I still use the solutions in my current work and personal
projects.</p>
<p>Besides the actual development of components, libraries and tools, I frequently speak at tech
conferences, usually explaining the BEM methodology. I write articles in English and Russian, as well as
tutorials and training projects to help developers perform their first dive into
BEM.
There are some links on the <a href="en/content/">content</a> page for your browsing pleasure.</p>
<p>In my spare time (haha), I study in Aalto University at <a href="https://www.idbm.aalto.fi/">IDBM</a> programme which includes the
topics of Business Design, Service Design, Industry and Market Researches and assumes a lot of project work.</p>
<p>I am keen on traveling and dream of having friends all over the world.
If you're interested, here's the first personal thing to learn about me: I am passionate about cats, all of them (lions included).</p>
<p>On this site I publish my day-to-day writings as well as links to
articles, projects and presentations.</p>
<p>This site is available in both English and <a href="/ru">Russian</a>.</p>
<p>Here are some obligatory (but useful) links as well:</p>
<ul>
<li><a href="https://github.com/varya">Github</a></li>
<li><a href="https://twitter.com/varya_en">Twitter</a></li>
<li><a href="http://www.linkedin.com/pub/varvara-stepanova/30/72a/96b">LinkedIn</a></li>
</ul>
</div>
      </Content>
      <RightSide></RightSide>
      <LeftSide>
        <Prompt />
      </LeftSide>
    </Container>
    );
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
