import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavbarItem = styled(Link)`
  align-items: center;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  color: #555;
`

const NavbarDivider = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  color: #aaa;
`

type navigationProps = {
  title: string
}

const Header = ({ title }: navigationProps) => {
  type link = { name: string; url: string }
  const links: Array<link> = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "blog",
      url: "/blog",
    },
    {
      name: "photos",
      url: "/photos",
    },
  ]

  return (
    <div className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavbarItem
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to="/"
          >
            {title}
          </NavbarItem>
        </div>

        <div className="navbar-end" style={{ paddingRight: "1.5rem" }}>
          <div className="navbar-menu">
            <div className="navbar-start">
              {links.map((l, idx) => {
                const divider = <NavbarDivider> / </NavbarDivider>
                if (idx === 0) {
                  return (
                    <div style={{ display: "flex" }}>
                      <NavbarItem to={l.url}>{l.name}</NavbarItem>
                    </div>
                  )
                }

                return (
                  <div style={{ display: "flex" }}>
                    {divider}
                    <NavbarItem to={l.url}>{l.name}</NavbarItem>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
