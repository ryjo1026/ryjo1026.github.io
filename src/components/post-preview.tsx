import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import DeepPropertyAccess from '../utils/deep-property-access';
import { PageQuery_allMarkdownRemark_nodes as INodes } from '../pages/__generated__/PageQuery';

type PostPreviewProps = {
  postData: INodes;
};

const PostPreview = ({ postData }: PostPreviewProps) => {
  const placeholder = useStaticQuery(graphql`
    query PlaceholderImage {
      file(relativePath: { eq: "img/placeholder.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const title =
    DeepPropertyAccess.get(postData, 'frontmatter', 'title') ||
    DeepPropertyAccess.get(postData, 'fields', 'slug') ||
    'N/A';
  const slug = DeepPropertyAccess.get(postData, 'fields', 'slug') || 'N/A';
  const date = DeepPropertyAccess.get(postData, 'frontmatter', 'date') || 'N/A';
  const description =
    DeepPropertyAccess.get(postData, 'frontmatter', 'description') || '';

  const excerpt = DeepPropertyAccess.get(postData, 'excerpt') || 'N/A';

  const featuredImgFluid =
    DeepPropertyAccess.get(
      postData,
      'frontmatter',
      'featuredImage',
      'childImageSharp',
      'fluid'
    ) ||
    DeepPropertyAccess.get(placeholder, 'file', 'childImageSharp', 'fluid');

  return (
    <article className="media" itemScope itemType="http://schema.org/Article">
      <figure
        className="media-left"
        style={{ marginRight: '2.5rem', padding: '1rem' }}
      >
        <div className="image is-128x128">
          <Img
            style={{ maxHeight: '128px', maxWidth: '128px' }}
            fluid={featuredImgFluid as FluidObject}
          />
        </div>
      </figure>

      <div className="media-content" style={{ paddingTop: '1rem' }}>
        <div className="content">
          <strong>
            <Link style={{ boxShadow: `none` }} to={slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </strong>
          <p
            style={{ marginTop: '0.5rem' }}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: description || excerpt,
            }}
            itemProp="description"
          />
        </div>
      </div>

      <div className="media-right">
        <small>{date}</small>
      </div>
    </article>
  );
};

export default PostPreview;
