import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import fetchJsonp from 'fetch-jsonp'

import Link from '../../../templates/components/Link'

import style from './style.css'

export default class GitHub extends Component {

  constructor(props) {

    super()

    this.state = {}

    const { user } = props

    var url = 'http://api.github.com/users/' + user + '/repos?sort=updated&callback=jQuery17209063584265375815_1483819787113';
    var _this = this;
    fetchJsonp(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // Filter out the respos
        var filter = [
          'varya.github.com'
        ];
        this.setState({
          repos: data.data.filter(function(repo) {
                if(filter.indexOf(repo.name) === -1) {
                    return true;
                }
            }).slice(0, 20)
        })

      })
  }

  render() {

    const { texts } = this.props

    const { repos } = this.state

    if (!repos) {
      return (<div/>)
    }

    let showRepos =  repos && repos.map((repo, i) => {
     const key = `Repo_${i}`
      return (
        <li className={style.repo} key={key}>
          <Link href={repo.html_url}>{repo.name}</Link>
        </li>
      )
    })

    showRepos = showRepos && (
      <ul className={style.body}>
        {showRepos}
      </ul>
    )

    return (
      <div className={style.github}>
        <div className={style.header}>{texts.githubTitle}</div>
        {showRepos}
      </div>
    )
  }

}
