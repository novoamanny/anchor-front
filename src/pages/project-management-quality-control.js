import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Hero from "../components/hero";
import heroImage from "../images/pm-hero.jpg";
import ImageText from "../components/imageText";
import FullImageText from "../components/fullImageText";
import Tab from "../components/PMQ/tab";
import blueprint from "../images/blueprint-white.jpg";

import workerImage from "../images/worker-using-machine.jpg";
import threadsImage from "../images/threads.jpg";
import sparksImage from "../images/sparks-dark.jpg";

const ProjectManagement = ({ location: { pathname } }) => {
  const data = useStaticQuery(query);
  // hero content
  const pageTitle =
    data?.allStrapiProjectManagementAndResources?.nodes?.[0]?.PageTitle ?? null;
  // project management
  const qualityControlTitle =
    data?.allStrapiProjectManagementAndResources?.nodes?.[0]
      ?.QualityControlTitle ?? null;
  const qualityControlText =
    data?.allStrapiProjectManagementAndResources?.nodes?.[0]
      ?.QualityControlText ?? null;
  // planning
  const planningTitle =
    data?.allStrapiProjectManagementAndResources?.nodes?.[0]?.PlanningTitle ??
    null;
  const planningText =
    data?.allStrapiProjectManagementAndResources?.nodes?.[0]?.PlanningText ??
    null;
  // mitigation
  const mitigationTitle =
    data?.allStrapiProjectManagementAndResources?.nodes?.[0]?.MitigationTitle ??
    null;
  const mitigationText =
    data?.allStrapiProjectManagementAndResources?.nodes?.[0]?.MitigationText ??
    null;
  // metal manufacturing
  const metalManufacturingTitle =
    data?.allStrapiProjectManagementAndResources?.nodes?.[0]
      ?.MetalManufacturingTitle ?? null;
  const metalManufacturingText =
    data?.allStrapiProjectManagementAndResources?.nodes?.[0]
      ?.MetalManufacturingText ?? null;
  // process
  const processTitle =
    data?.allStrapiProjectManagementAndResources?.nodes?.[0]?.ProcessTitle ??
    null;
  const processText =
    data?.allStrapiProjectManagementAndResources?.nodes?.[0]?.ProcessText ??
    null;
  // TODO: Update this with proper image for the hero

  const currentPage =
    pathname.split("/")[1] === "project-management-quality-control"
      ? "PMQ"
      : pathname.split("/")[1];

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "pm-page",
        }}
      />
      <SEO title="Project Management and Quality Control" />
      <div className="resources">
        <Hero title={pageTitle} image={heroImage} page={currentPage} />
      </div>

      <Tab
        qualityControlTitle={qualityControlTitle}
        qualityControlText={qualityControlText}
        cta={'Request A Consultation'}
        ctaUrl={'/contact/#request-a-consultation'}
      />

      <ImageText
        title={planningTitle}
        content={planningText}
        isMarkdown={true}
        textPosition="left"
        minHeight="500px"
        fillColor="tan"
        page={currentPage}
        section={0}
        image={threadsImage}
      />
<div className='text-link-white'>
      <FullImageText
        title={mitigationTitle}
        content={mitigationText}
        isMarkdown={true}
        ctaUrl="#"
        ctaText="Schedule a tour"
        page={currentPage}
        section={0}
        image={sparksImage}
      />
</div>

<div id='p'>
      <ImageText
        title={metalManufacturingTitle}
        content={metalManufacturingText}
        isMarkdown={true}
        textPosition="right"
        minHeight="500px"
        fillColor="blue"
        page={currentPage}
        section={1}
        image={workerImage}
      />
</div>
      <FullImageText
        title={processTitle}
        content={processText}
        isMarkdown={true}
        page={currentPage}
        section={1}
        image={blueprint}
      />
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiProjectManagementAndResources {
      nodes {
        PageTitle
        MetalManufacturingText
        MetalManufacturingTitle
        MitigationText
        MitigationTitle
        PlanningTitle
        PlanningText
        ProcessText
        ProcessTitle
        QualityControlTitle
        QualityControlText
      }
    }
  }
`;

export default ProjectManagement;
