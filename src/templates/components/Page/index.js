import React, { Component } from 'react'

import Header from '../Header'
import Layout from '../Layout'

import style from './style.css'

export default class Page extends Component {


  render() {
    return (
      <div>
        <Header/>
        <Layout {...this.props}>
          { this.props.children }
        </Layout>
      </div>
    )

  }

}
