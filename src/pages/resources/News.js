import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import heroImage from "../../images/blog-header.jpg";
import ImageText from "../../components/imageText";
import FullImageText from "../../components/fullImageText";
import FullImage from "../../images/about-welder.jpg";
import ArticlesComponent from "../../components/Resources/articles";

const News = ({ location: { pathname, state } }) => {
  const data = useStaticQuery(query);
  const currentPage = pathname.split("/")[1] + "-" + pathname.split("/")[2];

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "News-page",
        }}
      />
      <SEO title="News" />
      <Hero
        title="Custom Metal Fabrication News"
        image={heroImage}
        page={currentPage}
      />
      {data.allStrapiNewsPost.edges.map((edge, index) => {
        return (
          <ImageText
            articles={data.allStrapiNewsPost.edges}
            BlogId={edge.node.id}
            title={edge.node.Title}
            image={edge.node.NewsPostImage.publicURL}
            posted={edge.node.Posted}
            subtitleBlog={edge.node.SecondaryTitle}
            content={edge.node.PreviewContent}
            isMarkdown={true}
            textPosition={index % 2 != 0 ? "right" : "left"}
            fillColor={index % 2 != 0 ? "blue" : "white"}
            page={currentPage}
            section={index}
            reverse={index % 2 != 0 ? true : false}
            blogUrl={`${process.env.GATSBY_FRONTEND_URL
              }/resources/news/${edge.node.slug.toLowerCase()}`}
            ctaText={"See More"}
          />
        );
      })}
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiNewsPost {
      edges {
        node {
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
    }
  }
`;

export default News;
