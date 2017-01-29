import React, { Component } from 'react'

import style from './style.css'

export default class Related extends Component {

  render() {
    const { title, texts, repoLinkEdit } = this.props

    const feedBackLink = `https://github.com/varya/varya.github.com/issues/new?title=Feedback for ${title}`

    return (
      <div className={style.related}>
        <div className="box__body">
          <h4 className={style.header}>
            { texts.byTheWay }
          </h4>
        </div>
        <div className="box__island">
          <a href={feedBackLink}>
            { texts.createIssue }
          </a>{ texts.spottedError }.
          { ' ' }
          { texts.youCan }
          <a href={ repoLinkEdit }>
            { texts.editYorself }
          </a>.
        </div>
      </div>
    )

  }

}
