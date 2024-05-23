import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Card = ({ article }) => {
  return (
    <Link to={`/resources/blog/${article.node.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          {/* <GatsbyImage
            image={article.node.image.localFile.childImageSharp.gatsbyImageData}
            alt={`Hero image`}
          /> */}
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            static category name
            {/* {article.node.category.name} */}
          </p>
          <p id="title" className="uk-text-large">
            static article title
            {/* {article.node.title} */}
          </p>
          <div>
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                static article author photo
                {/* {article.node.author.picture && (
                  <GatsbyImage
                    image={
                      article.node.author.picture.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={`Picture of ${article.node.author.name}`}
                    style={{ borderRadius: "50%" }}
                  />
                )} */}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  startic article author name
                  {/* {article.node.author.name} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
