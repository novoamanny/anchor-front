import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Hero from "../../../components/hero";
import ReactMarkdown from "react-markdown";
import "../../../styles/Resources/blogPost.css";

export const query = graphql`
  query NewsQuery($slug: String!) {
    strapiNewsPost(slug: { eq: $slug }) {
      id
      slug
      Content
      SecondaryTitle
      PreviewContent
      Title
      Posted
      NewsPostImage {
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

const Article = ({ data, pathname }) => {
  const article = data.strapiNewsPost;
  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "news-single-page",
        }}
      />  
      <SEO title={article.Title} />
      <Hero
        title="Custom Metal Fabrication News"
        image={article.NewsPostImage.publicURL}
        page="news-single"
      />
      <div className="single-page">
        <div className="col-1"></div>
        <div className="container col-2">
          <div>
            <h1>{article.Title}</h1>
            <h2>{article.SecondaryTitle}</h2>
            <h3>Anchor Fabrication Team | {article.Posted}</h3>
          </div>
          <div className="main-content">
            <ReactMarkdown>{article.Content}</ReactMarkdown>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </Layout>
  );
};

export default Article;
