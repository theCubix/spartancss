import { html } from 'lit-html'
import Header from '../components/header'

let Layout = (child) => html`
  <div>
    ${Header('SpartanCSS.io')}
    <main>
      ${child}
    </main>
  </div>
`

export default Layout
