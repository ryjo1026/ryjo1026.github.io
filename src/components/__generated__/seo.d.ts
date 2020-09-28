/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seo
// ====================================================

export interface seo_site_siteMetadata_social {
  twitter: string | null;
}

export interface seo_site_siteMetadata {
  title: string | null;
  description: string | null;
  social: seo_site_siteMetadata_social | null;
}

export interface seo_site {
  siteMetadata: seo_site_siteMetadata | null;
}

export interface seo {
  site: seo_site | null;
}
