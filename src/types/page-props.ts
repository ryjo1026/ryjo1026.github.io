import { WindowLocation } from '@reach/router';

export interface IPageProps {
  location: WindowLocation;
}

export interface IPageQuery {
  data: {
    site?: {
      siteMetadata?: {
        title?: string;
      };
    };
    allMarkdownRemark?: {
      nodes?: IPageNode[];
    };
  };
}

export interface IPageNode {
  node?: {
    excerpt?: string;
    fields?: {
      slug?: string;
    };
    frontmatter?: {
      date?: string;
      title?: string;
      description?: string;
    };
  };
}
