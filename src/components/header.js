import { html } from 'lit-html'

const Header = (title) => html`
<header class="header is-fixed">
  <h1 class="header-title">${title}</h1>
</header>
`

export default Header