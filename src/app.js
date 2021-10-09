import { Provider } from 'unstated'
import { render } from 'react-dom'

import Container from './container'

// get/create anchor element from body
const div = document.getElementById('app')
  ? document.getElementById('app')
  : (() => {
      const div = document.createElement('div')
      div.setAttribute('id', 'app')
      document.body.insertBefore(div, document.body.firstChild)
      return div
    })()

render(
  <Provider>
    <Container />
  </Provider>,
  div,
)
