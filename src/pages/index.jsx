import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout.jsx"
import BannerProfile from "../components/Banner/BannerProfile.jsx";
import { graphql } from "gatsby"
import StoryList from "../components/StoryList/StoryList";
import { Link } from "gatsby"

import "./style/index.scss"

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___timestamp] }
    ) {
      edges {
        node {
          frontmatter {
            id
            type
            title
            author
            digest
            create_date
            update_date
            reading_time
            path
            image
            timestamp
          }
        }
      }
    }
  }`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: props.data.allMarkdownRemark.edges.map(item=>item.node.frontmatter),
      isStickShow: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let scrollTop = window.pageYOffset
		// console.log("TCL: IndexPage -> handleScroll -> scrollTop", scrollTop)
    if (scrollTop > 600) {
      this.setState({ isStickShow: true })
    } else {
      this.setState({ isStickShow: false })
    }
  }

  render() {
    return (
      <Layout className={"index"}>
        <span className={`stick`} show={this.state.isStickShow ? 'true' : 'false'}></span>
        <BannerProfile></BannerProfile>
        <div className={`wrap`}>
          <div className={`before-start`}>
            <div className={`flex-1`}>
              <div className={"tip"}>Recommend Articles</div>
              <div className={"queto"}>“The beauty of a woman is not in the clothes she wears, the figure that she carries, or the way she combs her hair. The beauty of a woman is seen in her eyes, because that is the doorway to her heart, the place where love resides. True beauty in a woman is reflected in her soul. It's the caring that she lovingly gives, the passion that she shows & the beauty of a woman only grows with passing years.” ― Audrey Hepburn</div>
            </div>
            <div className={"flex-1 text-align-center"}>
              <Link className={`more`} to="/develop">See All Articles →</Link>
            </div>
          </div>
          <StoryList items={this.state.listData}></StoryList>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
