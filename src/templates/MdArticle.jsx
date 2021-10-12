import React from "react"
// import { Link } from "gatsby"
// import SEO from "../components/seo"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout.jsx"
import BannerFeatured from "../components/Banner/BannerFeatured.jsx";
import Article from "../components/Article/Article.jsx";
import { DiscussionEmbed } from "disqus-react"


import './template.scss'

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        id
        type
        title
        author
        digest
        create_date
        update_date
        reading_time
        timestamp
        path
        image
        tags
        palette {
          Vibrant
          DarkVibrant
          LightVibrant
          Muted
          DarkMuted
          LightMuted
        }
      }
    }
  }`

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        backgroundColor: `rgb(${props.data.markdownRemark.frontmatter.palette.Muted.join()})`,
      },
      isHeaderShow: true
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = window.pageYOffset
    if (scrollTop > 430) {
      this.setState({ isHeaderShow: false })
    } else {
      this.setState({ isHeaderShow: true })
    }
  }

  render() {
    return (
      <Layout>
        <div className={"theme"} style={this.state.theme}></div>
        <div className={"content"}>
          <BannerFeatured details={this.props.data.markdownRemark.frontmatter}></BannerFeatured>
          <Article html={this.props.data.markdownRemark.html}></Article>
          <DiscussionEmbed
            shortname={'gatsbyjasmine'}
            config={{
              identifier: this.props.data.markdownRemark.frontmatter.id,
              title: this.props.data.markdownRemark.frontmatter.title
            }}
          />
        </div>
      </Layout>
    )
  }
}


export default Template