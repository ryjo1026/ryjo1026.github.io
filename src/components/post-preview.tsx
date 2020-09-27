import { Link } from 'gatsby';
import React from 'react';
import DeepPropertyAccess from '../utils/deep-property-access';
import { IPageNode } from '../types/page-props';

type PostPreviewProps = {
  data: IPageNode;
};

const PostPreview = ({ data }: PostPreviewProps) => {
  const title =
    DeepPropertyAccess.get(data, 'frontmatter', 'title') ||
    DeepPropertyAccess.get(data, 'fields', 'slug') ||
    'N/A';
  const slug = DeepPropertyAccess.get(data, 'fields', 'slug') || 'N/A';
  const date = DeepPropertyAccess.get(data, 'frontmatter', 'date') || 'N/A';
  const description =
    DeepPropertyAccess.get(data, 'frontmatter', 'description') || '';

  const excerpt = DeepPropertyAccess.get(data, 'excerpt') || 'N/A';

  return (
    <article
      className="media"
      key={slug}
      itemScope
      itemType="http://schema.org/Article"
    >
      <figure className="media-left">
        <p className="image is-64x64">
          <img
            alt="placeholder"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </p>
      </figure>

      <div className="media-content">
        <div className="content">
          <strong>
            <Link style={{ boxShadow: `none` }} to={slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </strong>
          <br />
          <p
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
