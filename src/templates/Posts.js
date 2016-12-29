import React, { Component } from 'react'

export default class Post extends Component {

  render() {
    const { title } = this.props

    const posts = this.props.metadata.collections.posts

    let postsList = posts.map((post, i) => {
      const dir = `/${post.paths.dir}/`
      const key = `Post_${i}`
      return (
        <li key={key}>
          <a href={dir}>{post.title}</a>
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
