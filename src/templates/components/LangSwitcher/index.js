import React, { Component } from 'react'

import Link from '../Link'

import style from './style.css'

export default class LangSwitcher extends Component {

  render() {
    return (
      <ul className={style.switcher}>
        <li className={style.lang}>
          <Link href="/">en</Link>
        </li>
        <li className={style.lang}>
          <Link href="/ru/">ru</Link>
        </li>
      </ul>
    )

  }

}
