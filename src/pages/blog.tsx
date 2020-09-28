import React from 'react';
import { graphql } from 'gatsby';

import { IPageProps } from '../types/page-props';
import { PageQuery } from './__generated__/PageQuery';

import DeepPropertyAccess from '../utils/deep-property-access';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostPreview from '../components/post-preview';
import '../sass/main.scss';

class BlogIndex extends React.Component<IPageQuery & IPageProps> {
  render(): JSX.Element {
    const { data } = this.props;

    const siteTitle =
      DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'title') || 'N/A';

    const posts =
      DeepPropertyAccess.get(data, 'allMarkdownRemark', 'nodes') || [];

    if (posts.length === 0) {
      return (
        <Layout title={siteTitle}>
          <SEO title="All posts" />
          <p>There are currently no blog posts. Please come back later :)</p>
        </Layout>
      );
    }

    return (
      <Layout title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(post => {
          const slug = DeepPropertyAccess.get(post, 'fields', 'slug');
          return <PostPreview postData={post} key={slug} />;
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

interface IPageQuery {
  data: PageQuery;
}

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
