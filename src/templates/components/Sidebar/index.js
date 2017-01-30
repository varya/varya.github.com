import React, { Component } from 'react'

import Menu from '../Menu'
import GitHub from '../../../assets/components/GitHub'

import style from './style.css'

export default class Sidebar extends Component {

  render() {
    return (
      <nav className={style.sidebar}>
        <Menu {...this.props}/>
        <div id="GitHub"/>
      </nav>
    )

  }

}
