import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import JSLogo from "../images/javascript.svg"
import ReactLogo from "../images/react.svg"
import GatsbyLogo from "../images/gatsby.svg"
import NextLogo from "../images/next.svg"
import * as style from "../styles/index.module.scss"
import Layout from "../components/layout"

const Index = () => {
  return (
    <Layout>
      <>
        {/* Use this if the image is the same every time the component is used. Examples: site logo, index page hero image */}
        {/* blurred:This generates a very low-resolution version of the source image and displays it as a blurred background. */}
        <StaticImage src="../images/index-hero.jpg" alt="hero" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.heroImg} />
        <div className={style.textContainer}>
          <h1>I'm xxx!</h1>
          <h3>JavaScript Developer</h3>
        </div>
        <Link to="/contact">Contactページへ移動</Link>
      </>
    </Layout>
  )
}

export default Index