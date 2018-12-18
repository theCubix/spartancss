import { html, render } from 'lit-html'
// import page from 'page'

import IndexView from './views/index'
import Layout from './components/layout'

let app = () => html`
  ${
    Layout(IndexView())
  }
`

render(app(), document.querySelector('#app'))
