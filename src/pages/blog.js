import * as React from "react"
import { graphql, Link } from "gatsby"

//GraphQLでは問い合わせたファイルにあるコンポーネントに直接渡される
const Blog = ({ data }) => {
  return (
    <div>
      <h1>Blog</h1>
      <p>エンジニアの日常生活をお届けします</p>
      {data.allMarkdownRemark.edges.map((singleBlog, index) => {
        const { title, date, excerpt } = singleBlog.node.frontmatter
        const { slug } = singleBlog.node.fields
        return (
          <div key={index} >
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <p>{date}</p>
            <Link to={`/blog${slug}`}>Read More</Link>
          </div>
        )
      }
      )}
    </div >
  )
}

export default Blog
export const query = graphql`query BlogQuery {
    allMarkdownRemark(sort: {fields: frontmatter___id, order: DESC}) {
        edges {
          node {
            frontmatter {
              date
              excerpt
              id
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
`

