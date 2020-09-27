import React from "react"
import Header from "./header"

type layoutProps = {
  title: string,
  children: HTMLDivElement
}

const Layout = ({ title, children }: layoutProps) => {
    
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <header><Header title={title} /></header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
