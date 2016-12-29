import React, { Component } from 'react'

export default class Posts extends Component {

  render() {
    const { title, posts } = this.props

    let postsList = posts.map((post, i) => {
      const dir = `/${post.paths.dir}/`
      const key = `Post_${i}`
      return (
        <li key={key}>
          <a href={dir}>{post.title}</a>
          <div dangerouslySetInnerHTML={{ __html: post.snippet }}/>
        </li>
      )
    })

    postsList = (
      <ul>{postsList}</ul>
    )

    return (
      <div>
        <h1>{title}</h1>
        {postsList}
      </div>
    )

  }

}
