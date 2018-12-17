import { html, render } from 'lit-html'

import Header from './components/header'
import HeroSection from './components/hero-section'
import ShopsSection from './components/shops-section'

let app = () => html`
  <main>
    ${Header('SpartanCSS.io')}
    ${HeroSection()}
    ${ShopsSection()}
  </main>
`

render(app(), document.querySelector('#app'))