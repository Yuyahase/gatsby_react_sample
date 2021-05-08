import * as React from "react"
import { graphql } from "gatsby"

//GraphQLでは問い合わせたファイルにあるコンポーネントに直接渡される
const Blog = (props) => {
    console.log(props)
    return (
        <div>
            <h1>ブログページ</h1>
            {props.data.allMarkdownRemark.edges.map((singleBlog, index) =>
                <div>
                    <h2>{singleBlog.node.frontmatter.title}</h2>
                    <p>{singleBlog.node.frontmatter.date}</p>
                </div>
            )}
        </div>
    )
}

export default Blog
export const query = graphql`query BlogQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            excerpt
            id
            image
            title
          }
        }
      }
    }
  }  
`

