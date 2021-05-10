//The path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

//Called when a new node is created. 
exports.onCreateNode = ({ node, getNode, actions }) => {
    //アクションオブジェクトからcreateNodeFieldを取り出す
    const { createNodeField } = actions
    // Ensures we are processing only markdown files
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode })
        // Extend another node.
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const result = await graphql(`              
        query {
            allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___id] }){ 
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                    next {
                        frontmatter {
                          title
                        }
                        fields {
                          slug
                        }
                    }
                    previous {
                        fields {
                          slug
                        }
                        frontmatter {
                          title
                        }
                    }
                }
            }
        }
    `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // Create pages for each markdown file.
    result.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
        createPage({
            // Path for this page — required
            path: `blog${node.fields.slug}`,
            //The absolute path to the component for this page
            component: path.resolve(`./src/templates/single-blog.js`),
            context: {
                slug: node.fields.slug,
                next,
                previous,
            },
        })
    })
}
//Let plugins extend/mutate the site’s webpack configuration.
exports.onCreateWebpackConfig = ({
    actions,
}) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    //Include all modules that pass test assertion. 
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
            ],
        },
        //Configure how modules are resolved. 
        resolve: {
            extensions: ['.js', '.jsx', '.scss']
        }
    })
}
