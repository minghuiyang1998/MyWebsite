
import React from "react"
import './Article.scss'
import Prism from 'prismjs';

class Article extends React.Component {
  render() {
    const typeENUM = {
      'html': 'html',
      'js': 'javascript',
      'css': 'css'
    }

    let html = this.props.html.replace(/&#x3C;/g, '<').replace(/<pre><\s*code\s+class="language-(.*?)">(.*?)<\/code><\/pre>/sg, function (match, language, code) {
      return `<pre class="language-${typeENUM[language]}"><code class="language-${typeENUM[language]}">` + Prism.highlight(code, Prism.languages[typeENUM[language]], typeENUM[language]) + "</code></pre>";
    })
    return (
      <article className={"article"} dangerouslySetInnerHTML={{ __html: html }}></article >
    )
  }
}

export default Article