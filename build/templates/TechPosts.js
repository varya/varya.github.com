<!doctype html>
<html class='no-js' lang=''>
    <head>
        <title>Isomorphic Example</title>
    </head>
    <body>
        <div id='contents'><div><h1></h1><div>import React, { Component } from 'react'

import Posts from './Posts'

export default class TechPosts extends Component {

  render() {
    const { title, collection } = this.props

    const posts = this.props.metadata.collections[collection[0]]

    return (
      <Posts
        title={title}
        posts={posts}
        snippets={true}
        />
    )

  }

}
</div></div></div>

        <script src='bundle.js'></script>
    </body>
</html>

