/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogBanner
// ====================================================

export interface BlogBanner_file_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface BlogBanner_file_childImageSharp {
  fluid: BlogBanner_file_childImageSharp_fluid | null;
}

export interface BlogBanner_file {
  childImageSharp: BlogBanner_file_childImageSharp | null;
}

export interface BlogBanner {
  file: BlogBanner_file | null;
}
