import * as React from "react"
import { graphql } from "gatsby"

//GraphQLでは問い合わせたファイルにあるコンポーネントに直接渡される
const SingleBlog = (props) => {
    return (
        <>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <h1>{props.data.markdownRemark.frontmatter.date}</h1>
            {/* React’s replacement for using innerHTML in the browser DOM */}
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        </>
    )
}

export default SingleBlog

export const query = graphql`
    query SingleBlogQuery ($slug: String!) {     
        markdownRemark(fields: { slug: { eq: $slug } }) {   
            frontmatter {
                    date
                    excerpt
                    id
                    title
            }
            html
        }
    }
`