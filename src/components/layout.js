import React from "react"
import tw, { GlobalStyles } from "twin.macro"

const Main = tw.main`
  flex flex-col justify-center items-center bg-gradient-to-b from-electric to-ribbon h-screen font-body font-black
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {/* header here */}
    <Main>{children}</Main>
  </>
)

export default Layout
