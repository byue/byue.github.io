import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header } from "../components/Header"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Architech Solutions</title>
