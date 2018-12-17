import { html } from 'lit-html'
import shops from '../data/shops.js'

import Card from './card'

const shopsSection = () => html`
  <div class="container">
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
