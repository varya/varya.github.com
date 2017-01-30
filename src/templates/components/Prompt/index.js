import React, { Component } from 'react'

import style from './style.css'

export default class Prompt extends Component {

  render() {
    return (
      <aside className={style.prompt}>
        <ul className={style.socialIco}>
          <li className={style.item}>
            <ul className={style.feeds}>
              <li className={style.item}>
                <a className={style.rssText} href="/en/feed.xml" title="New on Varya.me in English">en</a>
              </li>
              <li className={style.item}>
                <a className={style.rssText} href="/ru/feed.xml" title="Новые записи на Varya.me">ru</a>
              </li>
            </ul>
            <a className={style.rss} href="/feed.xml" title="New on Varya.me"></a>
          </li>
          <li className={style.item}>
            <a className={style.twitter} href="https://twitter.com/varya_en" title="@varya_en" target="_blank"></a>
          </li>
          <li className={style.item}>
            <a className={style.github} href="https://github.com/varya" target="_blank"></a>
          </li>
          <li className={style.item}>
            <a className={style.facebook} href="http://www.facebook.com/varvara.stepanova.9" target="_blank"></a>
          </li>
          <li className={style.item}>
            <a className={style.linkedin} href="http://www.linkedin.com/pub/varvara-stepanova/30/72a/96b" target="_blank"></a>
          </li>
        </ul>
      </aside>
    )

  }

}
