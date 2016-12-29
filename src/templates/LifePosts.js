import React, { Component } from 'react'

import Posts from './Posts'

export default class LifePosts extends Component {

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
