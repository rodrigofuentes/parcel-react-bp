import React from 'react'
import ReactDOM from 'react-dom'
import {render} from '@testing-library/react'

import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App title="Hello" />, div)
  console.log(div.innerHTML)
  ReactDOM.unmountComponentAtNode(div)
})

test('renders h1', () => {
  const {getByText} = render(<App title="A Name" />)
  const linkElement = getByText(/A Name/i)
  expect(linkElement).toBeInTheDocument()
})
