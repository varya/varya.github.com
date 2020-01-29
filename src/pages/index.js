import React from "react";
// eslint-disable-next-line
import PropTypes from "prop-types";

import Helmet from "react-helmet";

import Layout from "../components/layout.js";
import { Container, LeftSide, Content, RightSide } from "../components/Layout/Layout";
import Prompt from "../components/Prompt";
import Avatar from "../components/Avatar";

class IndexPage extends React.Component {

  render() {

    return (
      <Layout location={this.props.location} history={this.props.history}>
      <Container>
        <Content>
<Helmet title="Varya Stepanova — design systems architect and engineering manager" defer={false} />
<div>

<h2>Varya Stepanova — a design systems expert</h2>

<Avatar />

<p>
  I am Varya Stepanova, a <b>design systems architect</b> with nearly 15 years of experience in frontend development,
  component-focused UI design and development, creating helpful tooling for the subject and spreading the
  practices across large organizations. I have two Master degrees — in physics and service design (Aalto
  University, <a href="https://www.idbm.aalto.fi/">IDBM</a> program), years of engineering experience and several leading
  roles behind.<br/>
  Nowadays my focus is on bringing design systems to the next level of success which includes cooperative work
  in the company development community and bridging the gap for designers, developers, and business specialists.
</p>

<p>
  At the moment, I am working as an independent consultant open for new projects.
  My roles include team leading of the design systems projects,
  technical leadership in frontend and building development infrastructure, evangelism and advocacy.
  You can find out more <a href="/design-systems/#projects">in a short description of the most significant design-system related projects</a>.
  My experience offers
  to launch and maintain design systems projects, run <a href="/design-systems/#workshops">training sessions and workshops</a>,
  cherish in-house design and development culture in the organizations and so on.
  I am based in Helsinki (Finland), flexible for both on-site and remote projects and don't mind traveling.
</p>

<p>
  Besides, I frequently speak at tech and design conferences and meetups. The topics I cover are related to my
  own experience. You can find here <a href="/articles-and-talks/">the list of my articles and talks</a>.
</p>

<p>If you got interested to explore my social networks and/or to contact me, here there are some links:</p>
<ul>
<li><a href="https://twitter.com/varya_en">@varya_en on Twitter</a></li>
<li><a href="https://www.linkedin.com/in/varyastepanova/">Varya Stepanova on LinkedIn</a></li>
<li><a href="https://github.com/varya">@varya on Github</a></li>
<li><a href="mailto:mail@varya.me">Email: mail@varya.me</a></li>
</ul>

<h2>Random facts</h2>

<p>I am originally from the Utmost North
(<a href="http://maps.yandex.com/-/CVR3nIPf">Petrozavodsk</a>,
Karelia).</p>

<p>More than 4 years, I was a member of
the <a href="http://bem.info/">BEM</a> team.</p>

<p>So far, I have lived in four cities and three countries but still open for new horizons.</p>

<p>Keen on cats, good food and city tourism.</p>

</div>
      </Content>
      <RightSide></RightSide>
      <LeftSide>
        <Prompt />
      </LeftSide>
    </Container>
    </Layout>
    );
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
