# auto-ikons

> prototype - collection of SVG icon components for React

[![NPM](https://img.shields.io/npm/v/auto-ikons.svg)](https://www.npmjs.com/package/auto-ikons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save auto-ikons
```

## Usage

```jsx
import React, { Component } from 'react'
import * as AutoIcons from 'auto-ikons'

const keys = Object.keys(AutoIcons)

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
              <span style={{ marginLeft: 20 }}>{key}</span>
            </div>
          )
        })}
      </div>
    )
  }
}
```

## License

MIT © [eswat2](https://github.com/eswat2)
