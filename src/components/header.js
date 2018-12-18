import { html } from 'lit-html'

const Header = (title) => html`
<header class="header is-fixed">
  <h1 class="header-title">${title}</h1>
  <ul class="header-list">
    <li><a href="/">Home</a></li>
    <li><a href="/todos/">Todos</a></li>
    <li><a href="/about/">about</a></li>
  </ul>
</header>
`

export default Header