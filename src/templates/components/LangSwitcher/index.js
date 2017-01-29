import React, { Component } from 'react'

import Link from '../Link'

import style from './style.css'

export default class LangSwitcher extends Component {

  render() {

    const { lang, translations, paths } = this.props
    const url = paths.dhref

    let linkEn = translations.en ? url.replace('/ru/', '/en/') : '/'
    let linkRu = translations.ru ? url.replace('/en/', '/ru/') : '/ru/'

    // exception for Index page
    if (url == '/') {
      linkRu = '/ru/'
    } else if (url == '/ru/') {
      linkEn = '/'
    }

    const linkEnTag = (lang === 'en') ? 'en' : <Link href={linkEn}>en</Link>
    const linkRuTag = (lang === 'ru') ? 'ru' : <Link href={linkRu}>ru</Link>


    return (
      <ul className={style.switcher}>
        <li className={style.lang}>
          {linkEnTag}
        </li>
        <li className={style.lang}>
          {linkRuTag}
        </li>
      </ul>
    )

  }

}
