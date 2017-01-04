<!doctype html>
<html class='no-js' lang=''>
    <head>
        <title>Isomorphic Example</title>
    </head>
    <body>
        <div id='contents'><div><h1></h1><div>import React, { Component } from 'react'

export default class Post extends Component {

  render() {

    const { title, contents } = this.props

    return (
      <div>
        <h1>{title}</h1>
        {contents}
      </div>
    )

  }

}
</div></div></div>

        <script src='bundle.js'></script>
    </body>
</html>

