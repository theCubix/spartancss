import { html } from 'lit-html'

const card = (title, category, city) => html`
  <div class="card has-colour">
    <div class="card-content">
      <h2 class="title is-2 is-capitalized">${title}</h2>
      <p class="text is-capitalized no-margin-bottom">${category} &ndash; ${city}</p>
    </div>
  </div>
`

export default card
