/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: image
// ====================================================

export interface image_file_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface image_file_childImageSharp {
  fluid: image_file_childImageSharp_fluid | null;
}

export interface image_file {
  childImageSharp: image_file_childImageSharp | null;
}

export interface image {
  file: image_file | null;
}
