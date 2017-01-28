import React from 'react'
import ReactDOM from 'react-dom'

import Candies from '../components/Candies'
import GitHub from '../components/GitHub'
import Front from '../components/Font'

import getTexts from '../../config/texts'

document.addEventListener('DOMContentLoaded', function (event) {
  let lang = document.querySelector('html').lang
  const texts = getTexts(lang)
  ReactDOM.render(<Candies max={28} min={12} reverse={true} />, document.getElementById('Header-Left'))
  ReactDOM.render(<Candies max={28} min={12} />, document.getElementById('Header-Right'))
  ReactDOM.render(<GitHub user="varya" texts={texts}/>, document.getElementById('GitHub'))
})

export default function () {
}
