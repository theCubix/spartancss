import { html } from 'lit-html'
import { until } from 'lit-html/directives/until'

let content = fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(JSON.stringify(myJson));
  return (
    html`
      ${myJson.map((post) => {
        return (
          html`
            ${Card(post.title, post.id, post.body)}
          `
        )
      })}
    `
  )
})

import Card from './card'

const postsSection = () => html`
  <div class="container">
    <h2 class="title is-2 has-margin-large">Fetched Data</h2>
    <div class="grid two-columns">
      ${
        until(content, html`<p>loading</p>`)
      }
    </div>
  </div>
`

export default postsSection
