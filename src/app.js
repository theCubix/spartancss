import { html, render } from 'lit-html'
import "@webcomponents/template"

import IndexView from './views/index'
import Layout from './components/layout'

let app = () => html`
  ${
    Layout(IndexView())
  }
`

render(app(), document.querySelector('#app'))
