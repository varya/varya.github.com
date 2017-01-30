import React, { Component } from 'react'

import Sidebar from '../Sidebar'
import Prompt from '../Prompt'
import LangSwitcher from '../LangSwitcher'

import style from './style.css'

export default class Layout extends Component {

  render() {
    return (
      <div className={style.layout}>
        <section className={style.main}>
          <LangSwitcher {...this.props}/>
          { this.props.children }
        </section>
        <Sidebar {...this.props}/>
        <Prompt {...this.props}/>
      </div>
    )

  }

}
