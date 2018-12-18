import { html } from 'lit-html'
import shops from '../data/shops.js'

import Card from './card'

const shopsSection = () => html`
  <div class="container">
    <h2 class="title is-2 has-margin-large">Static Data</h2>
    <div class="grid two-columns">
    ${shops.map((shop) => {
      return (
        html`
          ${Card(shop.name, shop.category, shop.city)}
        `
      )
    })}
    </div>
  </div>
`

export default shopsSection
