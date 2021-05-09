import * as React from "react"
import { Link } from "gatsby"
import * as style from "../styles/index.module.css"

const Index = () => {
  return (
    <>
      <h1 className={style.h1Text}>こんにちは</h1>
      <Link to="/contact">Contactページへ移動</Link>
    </
    >
  )
}

export default Index
