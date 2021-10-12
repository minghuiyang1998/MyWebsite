/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return graphql(`{
        allMarkdownRemark{
            edges {
                node {
                    html
                    frontmatter {
                        path
                    }
                }
            }
        }}`).then(res => {

        if (res.errors) {
            throw res.errors
        }

        const mdTemplate = path.resolve('src/templates/MdArticle.jsx');

        res.data.allMarkdownRemark.edges.forEach ((element, index ,array) => {
            const prev = index === 0? null : array[index - 1].node
            const next = index === array.length - 1 ? null : array[index + 1].node

            createPage({
                path: element.node.frontmatter.path,
                component: mdTemplate,
                context: {
                    prev,
                    next,
                }
            })
        })
    })
}


// You can delete this file if you're not using it
