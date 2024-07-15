import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Architech Solutions</h1>
      <StaticImage alt="Logo" src="../../static/images/logo.png"/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Architech Solutions</title>
