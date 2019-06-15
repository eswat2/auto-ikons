import React, { Component } from "react"

import { AutoIcons } from "auto-ikons"

const keys = Object.keys(AutoIcons)

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          margin: 40
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
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon style={{ width: 24, height: 24 }} />
              <span style={{ marginLeft: 20 }}>{key}</span>
            </div>
          )
        })}
      </div>
    )
  }
}
