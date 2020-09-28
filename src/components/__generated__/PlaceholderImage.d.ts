/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PlaceholderImage
// ====================================================

export interface PlaceholderImage_file_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface PlaceholderImage_file_childImageSharp {
  fluid: PlaceholderImage_file_childImageSharp_fluid | null;
}

export interface PlaceholderImage_file {
  childImageSharp: PlaceholderImage_file_childImageSharp | null;
}

export interface PlaceholderImage {
  file: PlaceholderImage_file | null;
}
