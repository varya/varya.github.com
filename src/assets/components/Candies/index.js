import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import style from './style.css'

const colors = [
        'fa9300',
        '66c9ee',
        'c9c9c9',
        '82b964',
        'd24d33',
        'fffbdb',
        '2e77bb',
        '6bd5b1',
        'f87aa0',
        'c9c9c9',
        '72664e',
        'ccd600',
        'fffbdb',
        'df620e',
        '993838',
        'ff9600',
        'd24d33',
        '8960a7',
        '82b964',
        'f87aa0',
        'd43f3f',
        '668000',
        'ff9600',
        '8960a7',
        'c9c9c9',
        '993838',
        'CCD600',
        '668000',
        'f4cc13',
        '72664e',
        'fa9300',
        '66c9ee',
        'c9c9c9',
        '82b964',
        'CCD600',
        'fffbdb',
        '2e77bb',
        '6bd5b1',
        'f87aa0',
        'c9c9c9',
        'fa9300',
        '66c9ee',
        'c9c9c9',
        '82b964',
        'CCD600',
        'fffbdb',
        '2e77bb',
        '6bd5b1',
        'f87aa0',
        'c9c9c9'
    ]
let stopPoint = 0

export default class Candies extends Component {

  componentDidMount() {
    const parentNode = ReactDOM.findDOMNode(this).parentNode;
    const parentStyles = getComputedStyle(parentNode, null)
    this.setState({
      width: parentNode.clientWidth - parseInt(parentStyles['padding-left']) - parseInt(parentStyles['padding-right'])
    })
  }

  render() {

    if (!this.state) {
      return (<div/>)
    }

    let candies = []
    let initSize = 6
    let size
    let bt
    let colorIndex = stopPoint
    let i = 0

    const rt = 6
    const { max, min, reverse } = this.props
    const newSize = function(maxSize, minSize) {
      return Math.round(Math.random()*(maxSize - minSize) + minSize)
    }

    let width = this.state.width
    while(width > 2*rt) {
      if (initSize < min) {
        size = newSize(initSize, initSize)
        initSize = initSize + 2
      } else {
        size = newSize(max, min)
      }
      if (size > width - 2*rt) size = width - 2*rt
      bt = Math.round(Math.sin(i/2.5 + 1.5)*max*0.9/2)

      width = width - size - rt
      candies.push('<b class="' + style.item + '" style="width:' + size + 'px; height:' + size + 'px; background:#' + colors[colorIndex] +';margin: auto ' + rt + 'px ' + bt + 'px 0"></b>')
      i++
      colorIndex++
      if (!colors[colorIndex]) {
        colorIndex = 0
      }
    }

    stopPoint = colorIndex

    if (reverse) candies.reverse()

    return (
      <b className={style.candies} dangerouslySetInnerHTML={{ '__html' : candies.join('')}}/>
    )
  }

}
