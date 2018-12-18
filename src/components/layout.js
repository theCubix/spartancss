import { html } from 'lit-html'
import Header from '../components/header'
import "@webcomponents/template"

let Layout = (child) => html`
  <div>
    ${Header('SpartanCSS.io')}
    <main>
      ${child}
    </main>
  </div>
`

export default Layout
