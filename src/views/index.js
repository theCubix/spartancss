import { html } from 'lit-html'

import HeroSection from '../components/hero-section'
import ShopsSection from '../components/shops-section'
import PostsSection from '../components/posts-section'

let IndexView = () => html`
  <div>
    ${HeroSection()}
    ${ShopsSection()}
    ${PostsSection()}
  </div>
`

export default IndexView
