import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';

import Header from './header';

import { BlogPostBySlug_markdownRemark_frontmatter_bannerImage_childImageSharp_fluid as BannerImage } from '../templates/__generated__/BlogPostBySlug';
import { graphql, useStaticQuery } from 'gatsby';
import { readBuilderProgram } from 'typescript';

type layoutProps = {
  title: string;
  children: React.ReactNode;
  bannerImage?: BannerImage;
  isHome?: Boolean;
};

const defaultProps = {
  bannerImage: '',
  isHome: false,
};

const Layout = ({ title, bannerImage, children, isHome }: layoutProps) => {
  let hero: React.ReactNode;
  if (bannerImage) {
    hero = (
      <section className="hero is-medium is-primary is-bold">
        <Img
          style={{ maxHeight: '300px', width: '100%' }}
          fluid={bannerImage as FluidObject}
        />
      </section>
    );
  } else if (isHome) {
    const blogBanner = useStaticQuery(graphql`
      query BlogBanner {
        file(relativePath: { eq: "img/blog-banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);
    hero = (
      <section className="hero is-medium is-bold">
        <Img
          style={{ maxHeight: '300px', width: '100%' }}
          fluid={blogBanner.file.childImageSharp.fluid as FluidObject}
        />
        <div
          className="hero-body"
          style={{ marginLeft: '75px', position: 'absolute', zIndex: 10 }}
        >
          <h1 className="title has-text-white">Blog</h1>
          <p className="subtitle has-text-white">just some random thoughts</p>
        </div>
      </section>
    );
  }

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <header>
        <Header title={title} />
      </header>
      <main>
        {hero}

        <section style={{ marginTop: '3rem' }}>
          <div className="columns is-mobile">
            <div className="column is-8 is-offset-2">
              <div className="box">{children}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
Layout.defaultProps = defaultProps;

export default Layout;
