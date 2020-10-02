import React from 'react';
import { Link, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { BlogPostBySlug } from './__generated__/BlogPostBySlug';
import DeepPropertyAccess from '../utils/deep-property-access';

type BlogPostTemplateProps = {
  data: BlogPostBySlug;
  pageContext: any;
};

const BlogPostTemplate = ({ data, pageContext }: BlogPostTemplateProps) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  const bannerImage = DeepPropertyAccess.get(
    post,
    'frontmatter',
    'bannerImage',
    'childImageSharp',
    'fluid'
  );

  return (
    <Layout title={post.frontmatter.title} bannerImage={bannerImage}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div style={{ padding: '3rem 7rem 0rem 7rem' }}>
        <article itemScope itemType="http://schema.org/Article">
          <header>
            <h1
              itemProp="headline"
              style={{
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                display: `block`,
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className="section"
            style={{ paddingTop: '1rem', paddingBottom: '2rem' }}
          />
        </article>

        <nav className="navbar">
          <div className="navbar-menu">
            <div className="navbar-start">
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <button className="button" type="button">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      style={{ marginRight: '1rem' }}
                    />
                    {previous.frontmatter.title}
                  </button>
                </Link>
              )}
            </div>
            <div className="navbar-end">
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <button className="button" type="button">
                    {next.frontmatter.title}
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ marginLeft: '1rem' }}
                    />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 3200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
