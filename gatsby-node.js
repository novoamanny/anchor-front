/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// Generally you create redirects while creating pages.
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/join-us",
    toPath: "/careers",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/services-custom-metal-fabrication",
    toPath: "/services",
    isPermanent: true,
    redirectInBrowser: true,
  });
  // createRedirect({
  //   fromPath: "/services/welding",
  //   toPath: "/services/Welding",
  //   isPermanent: true,
  //   redirectInBrowser: true,
  // });
  // createRedirect({
  //   fromPath: "/services/coating",
  //   toPath: "/services/Coating",
  //   isPermanent: true,
  //   redirectInBrowser: true,
  // });
  // createRedirect({
  //   fromPath: "/services/machining",
  //   toPath: "/services/Machining",
  //   isPermanent: true,
  //   redirectInBrowser: true,
  // });
  // createRedirect({
  //   fromPath: "/services/forming",
  //   toPath: "/services/Forming",
  //   isPermanent: true,
  //   redirectInBrowser: true,
  // });
  // createRedirect({
  //   fromPath: "/services/assembly",
  //   toPath: "/services/Assembly",
  //   isPermanent: true,
  //   redirectInBrowser: true,
  // });
  createRedirect({
    fromPath: "/services/laser-cutting-metal",
    toPath: "/services/laser-cutting",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/services/engineering-and-design-for-assembly",
    toPath: "/services/Assembly",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/about-anchor",
    toPath: "/about",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/our-culture",
    toPath: "/about",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/about-us/history-facilities-custom-metal-fabrication",
    toPath: "/about",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/contract-manufacturing-resources",
    toPath: "/resources",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/meet-the-team",
    toPath: "/about",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/talk-to-sales",
    toPath: "/contact",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/contact-us-today",
    toPath: "/contact",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/ready-and-reliable-manufacturing",
    toPath: "/contact",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/what-oem-design-engineers-should-know-before-working-with-a-contract-manufacturer",
    toPath: "/download-e-guide",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/7-primary-manufacturing-struggles-of-oems",
    toPath: "/download-e-guide",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/schedule-an-anchor-fabrication-plant-tour",
    toPath: "/download-e-guide",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/the-benefits-of-outsourcing-metal-fabrication",
    toPath: "/download-e-guide",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/the-anchor-difference-contract-metal-fabrication",
    toPath: "/download-e-guide",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/compare-your-metal-fabrication-manufacturing-options",
    toPath: "/download-e-guide",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/industries-we-serve-custom-sheet-metal-fabrication",
    toPath: "/download-e-guide",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/a-comprehensive-guide-to-choosing-the-right-metal-fabrication-partner",
    toPath: "/download-e-guide",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/topic/risk-management",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/topic/industry-news",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/topic/metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/topic/project-management",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/tolerances-in-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/training-in-custom-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/project-management-and-contract-manufacturing-efficiency",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/cost-of-new-product-introduction-materials",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/choosing-a-metal-fabrication-partner-pricing",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/dont-juggle-multiple-metal-fabrication-vendors",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/burden-labor-in-custom-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/trump-trade-and-the-metal-fabrication-industry",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/custom-metal-fabrication-personnel-series-part-3",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/international-best-manufacturing-practices-learnings-from-germany",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/mitigating-risk-when-outsourcing-your-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/lower-costs-in-elevator-and-escalator-manufacturing",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/applying-manufacturing-design-to-elevator-oem-product-design",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/4-reasons-oems-should-outsource-to-contract-manufacturing",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/mig-welding-and-tig-welding-whats-the-difference",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/value-analysis/value-engineering-in-custom-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/powder-coating-and-wet-coating-in-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/embodying-ready-and-reliable-manufacturing-in-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/keys-to-choosing-a-metal-fabrication-partner-capabilities-services",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/top-4-hidden-costs-of-outsourcing-multiple-manufacturing-vendors",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/keys-to-choosing-a-metal-fabrication-partner-technology/equipment",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/employee-engagement-and-how-it-affects-custom-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/fixing-the-manufacturing-perception-problem-in-the-u.s",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/keys-to-choosing-a-metal-fabrication-partner-performance-reputation-stability",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/the-challenges-of-custom-metal-fabrication-in-a-cyclical-business",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/how-to-sell-a-prospective-metal-fabrication-partner-to-your-boss",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/custom-metal-fabrication-personnel-series-part-2-hiring-in-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/how-far-is-too-far-to-ship-your-contract-manufacturing-parts",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/inventory-management-series-managing-scrap-and-drop-in-custom-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/hero-or-zero-the-pains-of-an-unpredictable-custom-metal-fabrication-process",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/when-tolerances-get-iffy-how-too-many-vendors-can-wreck-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/three-reasons-you-should-think-twice-before-using-job-shops-for-metal-fabrication",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/is-it-time-to-consolidate-your-job-shops-into-a-multi-service-vendor",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/build-more-or-ship-more-why-oems-should-take-advantage-of-contract-manufacturing",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/custom-metal-fabrication-personnel-series-part-1-forecasting-labor-needs?hs_amp=true",
    toPath: "/resources/Blog",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/down-to-the-paint-the-benefits-of-an-all-in-one-metal-fabrication-partner",
    toPath:
      "/resources/blog/down-to-the-paint-the-benefits-of-an-all-in-one-metal-fabrication-partner",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath:
      "/blog/why-we-believe-good-is-not-good-enough-in-metal-fabrication",
    toPath:
      "/resources/blog/why-we-believe-good-is-not-good-enough-in-metal-fabrication",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/anchor-expansion-update-welding-services-facility",
    toPath: "/resources/blog/anchor-expansion-update-welding-services-facility",
    isPermanent: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: "/blog/an-oems-burden-of-equipment-maintenance-and-investment",
    toPath: "/resources/blog/burden-labor-in-custom-metal-fabrication",
    isPermanent: true,
    redirectInBrowser: true,
  });
};
