import React, { Component } from 'react'
import * as AutoIcons from 'auto-ikons'

const keys = Object.keys(AutoIcons)

const camelToDash = s =>
  s.replace(/([A-Z])/g, function($1, p1, pos) {
    return (pos > 0 ? '-' : '') + $1.toLowerCase()
  })

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          margin: 40,
        }}
      >
        <h1>Modern React component module</h1>
        <hr />
        {keys.map((key, index) => {
          const Icon = AutoIcons[key]
          return (
            <div
              key={`icon-${index}`}
              style={{
                height: 48,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Icon style={{ width: 24, height: 24 }} />
              <span style={{ marginLeft: 20 }}>{camelToDash(key)}</span>
            </div>
          )
        })}
      </div>
    )
  }
}
