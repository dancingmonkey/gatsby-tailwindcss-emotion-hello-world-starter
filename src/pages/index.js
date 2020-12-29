import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"

const Header1 = tw.h1`
  text-5xl text-center
`
const Header2 = tw.h1`
  text-4xl text-center
`

const Home = () => (
  <Layout>
    <div>
      <Header1>Twin Macro</Header1>
      <Header2>Hello World!</Header2>
    </div>
  </Layout>
)

export default Home
