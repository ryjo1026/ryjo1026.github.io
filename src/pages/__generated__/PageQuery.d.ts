/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PageQuery
// ====================================================

export interface PageQuery_site_siteMetadata {
  title: string | null;
}

export interface PageQuery_site {
  siteMetadata: PageQuery_site_siteMetadata | null;
}

export interface PageQuery_allMarkdownRemark_nodes_fields {
  slug: string | null;
}

export interface PageQuery_allMarkdownRemark_nodes_frontmatter_thumbnailImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface PageQuery_allMarkdownRemark_nodes_frontmatter_thumbnailImage_childImageSharp {
  fluid: PageQuery_allMarkdownRemark_nodes_frontmatter_thumbnailImage_childImageSharp_fluid | null;
}

export interface PageQuery_allMarkdownRemark_nodes_frontmatter_thumbnailImage {
  childImageSharp: PageQuery_allMarkdownRemark_nodes_frontmatter_thumbnailImage_childImageSharp | null;
}

export interface PageQuery_allMarkdownRemark_nodes_frontmatter {
  date: any | null;
  title: string | null;
  description: string | null;
  thumbnailImage: PageQuery_allMarkdownRemark_nodes_frontmatter_thumbnailImage | null;
}

export interface PageQuery_allMarkdownRemark_nodes {
  excerpt: string | null;
  fields: PageQuery_allMarkdownRemark_nodes_fields | null;
  frontmatter: PageQuery_allMarkdownRemark_nodes_frontmatter | null;
}

export interface PageQuery_allMarkdownRemark {
  nodes: PageQuery_allMarkdownRemark_nodes[];
}

export interface PageQuery {
  site: PageQuery_site | null;
  allMarkdownRemark: PageQuery_allMarkdownRemark;
}
