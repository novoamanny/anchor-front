import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import heroImage from "../images/heavy-header.jpg";
import ReactMarkdown from "react-markdown";
import "../styles/Resources/blogPost.css";

const Page = ({ location: { pathname } }) => {
  // const Page = ({ pathname }) => {
  const currentPage = pathname.split("/")[1];
  // const page = data.strapiBlogPost;

  const content = {
    title: "Privacy Policy",
    updatedAt: "Updated as of March 23, 2020",
    content: (
      <div>
        <p>
          Changes to our Privacy Policy as of March 23, 2020: The changes
          include clarifying the Sites and Services (as defined below) covered
          by the Privacy Policy, defining “personal information” covered by the
          Privacy Policy and updating our contact information in case you have
          privacy-related questions.
        </p>
        <p>
          Anchor Fabrication (collectively, “Anchor Fabrication” “we” or “us”)
          values your privacy. In this Privacy Policy (“Policy”), we describe
          how we collect, use, and disclose or otherwise process information and
          personal information that we obtain about users (“Users”) of our
          websites (each a “Site” and collectively the “Sites”), our social
          media networking pages, and the services available through our Sites
          (each a Service and collectively the “Services”). This Policy will
          apply to each Anchor Fabrication Site or App that displays it. This
          Policy does not apply to any websites, webpages, or mobile apps that
          are run or owned by any Anchor Fabrication employee, or any other
          third party. This Policy and our&nbsp;Cookie Policy&nbsp;describe our
          collection, use and disclosure of personal information and other
          information collected from Users. In this Policy, “personal
          information” means any information that Anchor Fabrication has
          collected and that identifies, relates to, describes, is reasonably
          capable of being associated with, or could reasonably be linked with a
          particular person or device.
        </p>
        <p>
          <strong>Information We Collect About You</strong>
        </p>
        <p>
          We collect personal information directly from Users, such as when they
          sign up to receive special offers or information from us, or register
          for an account with us. We also collect certain information (including
          personal information) automatically through Users’ use of our Sites
          and Services. If you would like to use our Sites and Services, but
          decide not to provide this personal information, certain Services may
          not be available to you.
        </p>
        <p>
          <strong>Information We Collect Directly From You</strong>
        </p>
        <p>
          You can browse our Sites without registering or submitting your
          personal information to us, but we will automatically collect certain
          information about your use of our Sites through cookies and other web
          tracking technologies – see&nbsp;Other Information We Collect
          Automatically&nbsp;below.
        </p>
        <p>
          To use our certain Services, you must register with us or otherwise
          provide us with your name and other personal information. We may also
          collect personal information that you enter on our Sites or provide to
          us in any other ways, such as through email or forms on our Sites. The
          type of personal information that we collect from you depends on your
          interaction with us and your use of our Sites and Services, but may
          include:
        </p>
        <ul>
          <li>
            personal details, such as full name, mailing address, email address,
            phone number, and other contact information;
          </li>
          <li>
            transaction information (if you make a purchase), such as
            information about the products you buy, billing address, method of
            payment, and payment details; and
          </li>
          <li>
            location data, and any other personal information that you choose to
            provide.
          </li>
        </ul>
        <p>
          <strong>
            Other Information about Your Activities and Interactions
          </strong>
        </p>
        <p>
          We collect information from you when you submit a review, comment or
          other content to our Sites or on our social networking pages, and when
          you contact us. In addition, we track when you like us or share our
          content through Facebook, Twitter, or other social networking
          platforms. Blogs on many of our Sites are hosted by WordPress (to
          review the WordPress privacy policy, click&nbsp;
          <a href="https://automattic.com/privacy/">here</a>), or other third
          parties.
        </p>
        <p>
          <strong>Information from Third Parties</strong>
        </p>
        <p>
          We may collect personal information about potential customers from
          third parties, including name, contact and other information. We also
          may collect information about any comments or reviews you post about
          us on third party websites.
        </p>
        <p>
          <strong>Your Location</strong>
        </p>
        <p>
          Our Sites may access and collect your geolocation information in order
          to facilitate our Services, such as enabling the functionality of our
          Sites. We may also use information about the location of the device
          you are using to help us understand how our Sites, and other Services
          and functionality are being used and to deliver more relevant
          advertising. For most mobile devices and computer systems, you are
          able to withdraw your permission for us to collect this information by
          using the device or web-browser settings.
        </p>
        <p>
          <strong>Other Information We Collect Automatically</strong>
        </p>
        <p>
          We may automatically collect certain information – including personal
          information – about your use of our Sites and social networking pages
          through cookies and other web tracking technologies, including, but
          not limited to: log files; domain name; browser type and operating
          system; page views and related activities; IP address; the length of
          time you use our Sites and Services; access date and time; browser
          type; device ID or other mobile or App identifier; and referring URL.
          We may combine this information with other information that we have
          collected about you. Please see our&nbsp;Cookie Policy&nbsp;for more
          information.
        </p>
        <p>
          <strong>How We Use Your Information</strong>
        </p>
        <p>
          We process and use your personal information if there is a legal
          justification for doing so. Below is an overview of the legal
          justifications for processing personal information, and why we use
          your personal information. Additional details on how we process your
          personal information may be provided to you in a separate notice or
          contract.
        </p>
        <p>
          -&nbsp;Performance of a Contract / Entering into a Contract&nbsp;-
          Processing your personal information is necessary in some cases to
          perform a contract with you or take steps to enter into a contract at
          your request:
        </p>
        <ul>
          <li>
            Providing Support and Services&nbsp;- to provide our support and
            Services to you, to communicate with you, to respond to your
            inquiries, to provide you with documentation or communications which
            you have requested from us, to provide after-sales support, and for
            other customer service purposes.
          </li>
          <li>
            General Business Operations&nbsp;- to process your orders or
            purchases.
          </li>
        </ul>
        <p>
          -&nbsp;Our Legitimate Interest&nbsp;-&nbsp;Processing your personal
          information is in our legitimate interests, which are not overridden
          by your interests and fundamental rights. When the justification for
          processing your personal information is our legitimate interests,
          those interests are to use User personal information to conduct and
          develop our business activities with Users and with others in order to
          support our reputation and increase our revenues, while limiting the
          use of personal information to those purposes that strictly support
          the conduct and development of our business within the reasonable
          expectation of the individuals concerned:
        </p>
        <ul>
          <li>
            Personalize Content&nbsp;- to make recommendations to you about our
            Services; to tailor the information that we send or display to you,
            to offer customization, based on your location; and to otherwise
            personalize your experiences based on your purchase history and your
            interactions with the Sites, and social networking pages;.
          </li>
          <li>
            Advertising&nbsp;- to send you targeted advertising on our Sites, or
            on third party websites.
          </li>
          <li>
            Marketing and Promotions&nbsp;- to send you news and newsletters,
            special offers and promotions, or to otherwise contact you about
            information we think may interest you.
          </li>
          <li>
            Analytics and Improvement&nbsp;- to better understand how Users
            access and use our Sites, and Services, in order to improve them,
            respond to User desires and preferences, and for other research,
            marketing and analytical purposes; to conduct research and
            analytics, to evaluate transactions involving the Sites, and social
            networking pages; to operate, evaluate, maintain, improve, and
            develop the Site, and social networking pages (including by
            monitoring and analyzing trends, access to, and use); or to
            evaluate, improve, and develop our Services generally by tracking
            User interaction and review of our Services.
          </li>
          <li>
            Protect Our Legal Rights and Prevent Misuse&nbsp;– to respond to
            claims asserted against us, comply with legal process (e.g.
            subpoenas or warrants), or enforce or administer our agreements and
            terms; to conduct fraud prevention, risk assessment, or
            investigations; to protect our rights, property or safety and those
            of Users, or others; and to protect our confidential and proprietary
            information.
          </li>
          <li>
            Comply with Legal Obligations&nbsp;– to comply with the law, a
            judicial proceeding, court order, subpoena, or other legal process.
          </li>
          <li>
            Corporate Reorganization&nbsp;– to share your personal information
            with third parties in connection with potential or actual sale of
            our company or any affiliate, or of any of our assets or those of
            any affiliated company, in which case personal information held by
            us about our Users may be one of the transferred assets.
          </li>
        </ul>
        <p>
          -&nbsp;Compliance with European Union (“EU”)
          Law&nbsp;-&nbsp;Processing your personal information is necessary in
          some cases for us to comply with a relevant legal obligation:
        </p>
        <ul>
          <li>
            EU Records&nbsp;- to keep accounting records and evidence of
            Services.
          </li>
          <li>
            Protect Our Legal Rights and Prevent Misuse in the EU&nbsp;- to
            respond to claims asserted against us, comply with legal process
            (e.g., subpoenas or warrants), or enforce or administer our
            agreements and terms; to conduct fraud prevention, risk assessment,
            or investigations; to protect our rights, property or safety and
            those of Users, or others; and to protect our confidential and
            proprietary information.
          </li>
          <li>
            Comply with EU Legal Proceedings&nbsp;- to comply with the law, a
            judicial proceeding, court order, subpoena, or other legal process.
          </li>
        </ul>
        <p>
          -&nbsp;Consent&nbsp;- We process your personal information in some
          cases because you have consented to that processing:
        </p>
        <ul>
          <li>
            Testimonials&nbsp;- to publish your User experience with our
            Services on our Sites or social networking pages.
          </li>
        </ul>
        <p>
          <strong>How We Share Your Information</strong>
        </p>
        <p>
          We do not sell or rent your personal information for monetary
          compensation. We may share your information, including personal
          information, as follows:
        </p>
        <p>
          <strong>Other Users</strong>
        </p>
        <p>
          Any information, including personal information, that you post on
          public areas of our Sites, such as reviews, comments, and photos, may
          be available to, and searchable by, all Users of the Sites. Reviews
          may also be viewable by non-registered visitors to our Sites.
        </p>
        <p>
          <strong>Service Providers</strong>
        </p>
        <p>
          We may disclose the personal information we collect from you to third
          party vendors, service providers, contractors or agents who perform
          functions on our behalf, such as payment processors, hosting
          providers, auditors, advisors, consultants, customer service, and
          support providers.
        </p>
        <p>
          <strong>Business Transfers</strong>
        </p>
        <p>
          In the event that we are involved in a potential or actual bankruptcy,
          merger, acquisition, reorganization, sale of assets, or similar event,
          your personal information may be sold or transferred as part of that
          transaction or in anticipation of a possible transaction. This Policy
          will apply to your personal information as transferred to the new
          entity.
        </p>
        <p>
          <strong>In Response to Legal Process</strong>
        </p>
        <p>
          We may disclose the personal information we collect from you to a
          court, legal authority, adverse litigation party, legal counsel, and
          other advisors in connection with a judicial proceeding, court order,
          subpoena, or other legal process.
        </p>
        <p>
          <strong>To Protect Us and Others</strong>
        </p>
        <p>
          We may disclose the personal information we collect from you to a
          court, legal authority, government agency, adverse litigation party,
          legal counsel and other advisors, where we believe it is necessary to
          investigate, prevent, or take action regarding illegal activities,
          suspected fraud, situations involving potential threats to the rights,
          property, and safety of Anchor Fabrication or any other person; to
          enforce or administer our&nbsp;Terms and Conditions, this Policy, or
          another Anchor Fabrication policy; or as evidence in litigation in
          which we are involved.
        </p>
        <p>
          <strong>Aggregate Information</strong>
        </p>
        <p>
          We or our third-party providers may share information that does not
          identify you. For example, we may share anonymous, aggregated
          statistics about Users with third parties for marketing, advertising,
          research, or similar purposes.
        </p>
        <p>
          <strong>With Your Consent or at Your Direction</strong>
        </p>
        <p>
          In addition to the sharing described in this Policy, we may share
          information about you with third parties whenever you consent to or
          direct such sharing.
        </p>
        <p>
          <strong>Our Use of Cookies and Other Tracking Mechanisms</strong>
        </p>
        <p>
          We and our third-party service providers use cookies and other
          tracking mechanisms to collect and track information about your use of
          our Sites and Services. We may combine this information with other
          personal information we collect from you. For example, we may use
          these technologies to:
        </p>
        <ul>
          <li>uniquely identify you or your device;</li>
          <li>
            allow you to access and use our Services, where without them, our
            Services may not work properly;
          </li>
          <li>improve our products and Services;</li>
          <li>help us monitor the performance of our Services;</li>
          <li>help us customize your experience;</li>
          <li>market to you through targeted advertising; and</li>
          <li>
            for other purposes described under the section entitled “How We Use
            Your Information” above. For more information about our use of
            cookies and other tracking mechanisms, please see our&nbsp;Cookie
            Policy.
          </li>
        </ul>
        <p>
          <strong>Cookies</strong>
        </p>
        <p>
          Cookies are alphanumeric identifiers that we transfer to your
          computer’s hard drive through your web browser for record-keeping
          purposes. Some cookies allow us to make it easier for you to navigate
          our Sites and Services, while others are used to enable a faster
          log-in process or to allow us to track your activities. For more
          information on the specific types of first and third party cookies
          served through our Sites, please see our&nbsp;Cookie Policy
        </p>
        <p>
          <strong>Clear GIFs, pixel tags and other technologies</strong>
        </p>
        <p>
          Clear GIFs are tiny graphics with unique identifiers, similar in
          function to cookies. In contrast to cookies, which are stored on your
          computer’s hard drive, clear GIFs are embedded invisibly on web pages.
          We may use clear GIFs (a.k.a. web beacons, web bugs or pixel tags), in
          connection with our Sites to, among other things, help us manage
          content, and compile statistics about usage. We and our third-party
          service providers use clear GIFs in HTML e-mails to our customers, to
          help us track e-mail response rates, identify when our e-mails are
          viewed, and track whether our e-mails are forwarded.
        </p>
        <p>
          <strong>Local Storage</strong>
        </p>
        <p>
          We may use local storage technologies, such as HTML5 or Flash Local
          Storage Objects (“Flash LSOs”) to store your Site preferences and to
          personalize your visit. Typically, you cannot control, delete, or
          disable the acceptance of HTML5 or Flash LSOs through your web
          browser. For more information on HTML5 and Flash LSOs, or to learn how
          to manage your settings for HTML5 and Flash LSOs, go to the Adobe
          Flash Player Help Page, choose “Global Storage Settings Panel” and
          follow the instructions.
        </p>
        <p>
          <strong>Advertising and Analytics</strong>
        </p>
        <p>
          We use third-party analytics tools, including, but not limited to,
          Google Analytics, to collect, monitor, and analyze information we
          collect from you in order to improve functionality and
          user-friendliness of our Sites and to better tailor the Services to
          our visitors’ needs.
        </p>
        <p>
          In addition, we may send Users targeted ads, based on their location
          and activities on our Sites. We may also participate in third-party ad
          networks (including but not limited to Google Ads and Facebook Ads)
          and allow third parties, including network advertisers, to use
          cookies, pixel tags, and other tracking technologies on the Sites to
          collect usage information and display targeted ads. These third
          parties may be able to associate the information they collect with
          other information they have about you from other sources. These
          third-party cookies and other technologies are governed by each third
          party’s specific privacy policy, not this one. For more information on
          third-party analytics and advertising practices, please visit
          our&nbsp;Cookie Policy
        </p>
        <p>
          <strong>Do-Not-Track</strong>
        </p>
        <p>
          Our Sites do not honor browser do-not-track requests. However, you can
          find information on how to opt out of many participating website ad
          networks at the following websites:&nbsp;Network Advertising
          Initiative&nbsp;, and&nbsp;Digital Advertising Alliance. Please note
          that opting out does not prevent all targeted ads from being displayed
          to you. Also, if you delete cookies or change devices, your opt-out
          may no longer be effective.
        </p>
        <p>
          <strong>User Generated Content</strong>
        </p>
        <p>
          Any content you post to our Sites or social networking pages (“User
          Generated Content”), may be available to all Users, and we cannot
          prevent such content from being used in a manner that violates this
          Policy, the law, or your personal privacy. We may review such User
          Generated Content, remove it, or combine such User Generated Content
          with other information we have collected about you and use it as
          described in this Policy. All User Generated Content is subject to our
          Terms and Conditions and the User Generated Content Terms and
          Conditions.
        </p>
        <p>
          <strong>Plug-ins and Social Media Widgets</strong>
        </p>
        <p>
          Our Sites may include social networking features and widgets, such as
          the Facebook “Like” button and the “Share this” button, as well as
          other interactive mini-programs that run on our Sites. These features
          may collect your IP address, which page you are visiting on our Sites,
          and may set a cookie to enable the feature to function properly. These
          features are displayed on our Sites but are hosted by third parties.
          Your interactions with these features are governed by the privacy
          policy of the company providing them, not this Policy. You should
          consult their respective privacy policies for information about their
          information practices.
        </p>
        <p>
          <strong>Testimonials</strong>
        </p>
        <p>
          We display personal testimonials of satisfied customers on our Sites,
          in addition to other endorsements. We may post your testimonial along
          with your name. If you wish to update or delete your testimonial, you
          can contact us at&nbsp;hello@Anchor Fabrication.co.
        </p>
        <p>
          <strong>Third-Party Links</strong>
        </p>
        <p>
          Our Sites and Services may contain links to third-party websites. Any
          access to and use of such linked websites is not governed by this
          Policy, but instead is governed by the privacy policies of those
          third-party websites. We are not responsible for the information
          practices of such third-party websites. Please read their respective
          privacy policies for information about how these third parties handle
          the processing of personal information and other information. If you
          delete your account, to the extent permitted by applicable law, we
          will retain and use your personal information as necessary to comply
          with our legal obligations, resolve disputes, maintain appropriate
          business records, and enforce our agreements.
        </p>
        <p>
          <strong>Duration of Personal Information Retention</strong>
        </p>
        <p>
          As a general rule, your personal information may be stored as long as
          the information is required to fulfill our legitimate business needs
          or the purposes for which the information was collected, or for as
          long as is required by law.
        </p>
        <p>
          You can contact us by email at:&nbsp;hello@Anchor
          Fabrication.co&nbsp;with questions or concerns regarding the retention
          period of your personal information.
        </p>
        <p>
          <strong>How I Can Correct My Information</strong>
        </p>
        <p>
          You may modify certain personal information that you have submitted to
          us. If you wish to correct or delete any of the personal information
          you have provided to us, you may contact us by email at: hello@Anchor
          Fabrication.co. Please note that copies of information that you have
          updated, modified or deleted may remain viewable in cached and
          archived pages of the Sites or App for a period of time, and we may
          maintain records in our systems of this information as well. If you
          are a user in the European Economic Area (“EEA”), you may have
          additional rights, as set forth in the “Your European Privacy Rights:
          section below.
        </p>
        <p>
          <strong>Personal Information Marketing Choices</strong>
        </p>
        <p>
          We may send periodic promotional or informational emails to you. You
          may opt-out of such communications by following the opt-out
          instructions contained in the e-mail or contacting us
          at&nbsp;hello@Anchor Fabrication.co. Please note that it may take up
          to ten (10) business days for us to process opt-out requests. If you
          opt-out of receiving emails about recommendations or other information
          we think may interest you, we may still send you administrative emails
          about your account or any Services you have requested or received from
          us.
        </p>
        <p>
          <strong>Children</strong>
        </p>
        <p>
          Our Services are not targeted at children under 13 years of age. No
          one under the age of 13 may provide any information to us through our
          Sites. We do not knowingly collect personal information from children
          under 13. If you are under 13, do not access, use, or provide any
          information on our Sites or on or through any of their features.
        </p>
        <p>
          Note to EEA Users&nbsp;: If you are under 16, you should not access,
          or provide any information on our Sites,or on or through any of their
          features.
        </p>
        <p>
          If we discover that a child under 13, or equivalent minimum age
          depending on the jurisdiction, has provided us with personal
          information, we will delete such information from our systems. If you
          are a parent or legal guardian of a child under 13, or equivalent
          minimum age in the relevant jurisdiction, whom you believe has
          submitted personal information to us, please contact us
          at&nbsp;hello@Anchor Fabrication.co.
        </p>
        <p>
          <strong>Notice to Nevada Residents</strong>
        </p>
        <p>
          Nevada law allows consumers to direct certain businesses not to sell
          their personally identifiable information to third parties to license
          or sell that information to additional third parties. If you are a
          Nevada resident, you may submit such opt-out requests
          to&nbsp;hello@Anchor Fabrication.co. To be effective, your request
          must include your full name, address, phone number, and email address.
          We will endeavor to respond to your verified request within 60 days of
          receiving the request. However, due to unforeseen circumstances, we
          may need to extend this period by up to 30 days. If an extension is
          reasonably necessary, we will notify you of this during the initial
          60-day period.
        </p>
        <p>
          <strong>International Users</strong>
        </p>
        <p>
          The Services are headquartered in the United States. Please be aware
          that information you provide to us or that we obtain as a result of
          the Services may be collected in your country and subsequently
          transferred to, maintained, accessed and otherwise processed in the
          United States or another country by us or our service providers for
          the purposes mentioned above in accordance with applicable law. The
          privacy laws of these countries may not always offer the same level of
          protection as in your country. Your European Privacy Rights
        </p>
        <p>
          If you are a data subject in the EEA, subject to certain conditions
          and restrictions set out in the General Data Protection Regulation
          (“GDPR”) and other applicable laws, you have the following rights with
          regard to our processing of your&nbsp;Personal Data&nbsp;(as defined
          in the GDPR):
        </p>
        <ul>
          <li>
            Right of access, erasure and rectification&nbsp;You have the right
            to request access to and obtain a copy of any of your Personal Data
            that we may hold, and to request the deletion of your Personal Data
            under certain circumstances. If the Personal Data we hold about you
            is inaccurate or incomplete, you are entitled to request to have it
            corrected. If you are entitled to have information corrected and if
            we have shared your Personal Data with others, we will let them know
            about the rectification where possible. If you ask us, we will also
            tell you, where possible and lawful to do so, with whom we have
            shared your Personal Data so that you can contact them directly.
          </li>
          <li>
            Your Right to Restriction of Processing&nbsp;You can ask us to
            restrict the processing of your Personal Data in certain
            circumstances, such as where you contest the accuracy of that
            Personal Data or you object to our use or stated legal basis. Where
            your Personal Data is subject to restriction, we will only process
            it with your consent or for the establishment, exercise or defense
            of legal claims. If you ask us, we will also tell you, where
            possible and lawful for us to do so, with whom we have shared your
            Personal Data so that you can contact them directly.
          </li>
          <li>
            Right to Data Portability&nbsp;Where we are relying (as the
            justification for processing) upon your consent, or the fact that
            the processing is necessary to perform a contract to which you are
            party or to take steps at your request prior to entering a contract,
            and the Personal Data is processed by automated means, you have the
            right to receive a copy of the Personal Data we have obtained from
            you in a structured, commonly used and machine readable format, and
            to reuse it elsewhere or to ask us to transfer this to a third party
            of your choice.
          </li>
          <li>
            Right to object to processing (including profiling) based on
            legitimate interest grounds&nbsp;Where we are relying upon
            legitimate interests to process Personal Data, you have the right to
            object to that processing. If you object, we must stop that
            processing unless we can demonstrate compelling legitimate grounds
            for the processing that override your interests, rights, and
            freedoms, or we need to process the Personal Data for the
            establishment, exercise, or defense of legal claims. Where we rely
            upon legitimate interest as a basis for processing we believe that
            we can demonstrate such compelling legitimate grounds, but we will
            consider each case on an individual basis.
          </li>
          <li>
            Right to object to direct marketing (including profiling)&nbsp;You
            have the right to object to our use of your Personal Data (including
            profiling) for direct marketing purposes, such as when we use your
            Personal Data to invite you to our promotional events.
          </li>
          <li>
            Your right to withdraw your consent&nbsp;In the event your Personal
            Data is processed on the basis of your consent, you have the right
            to withdraw consent at any time, without affecting the lawfulness of
            processing based on consent before its withdrawal.
          </li>
          <li>
            Your right to lodge a complaint&nbsp;You have the right to lodge a
            complaint with the supervisory authority of your habitual residence,
            place of work, or place of alleged infringement, if you consider
            that the processing of your Personal Data infringes applicable law.
          </li>
        </ul>
        <p>
          Please note that some of these rights may be limited, such as where we
          have an overriding interest or legal obligation to continue to process
          your Personal Data. If you wish to exercise any of these rights or for
          any other inquiries or complaints regarding the processing of your
          Personal Data by us, please contact us at&nbsp;hello@Anchor
          Fabrication.co.
        </p>
        <p>
          Please also note that Anchor Fabrication is a data controller with
          respect to the data of franchisees, prospective franchisees and
          franchisee applicants it collects or otherwise processes.
        </p>
        <p>
          <strong>Security</strong>
        </p>
        <p>
          We are committed to taking appropriate measures designed to keep your
          personal information secure. We have taken reasonable steps to help
          protect the information we collect about you from loss, misuse,
          unauthorized access, disclosure, alteration, and destruction. While we
          make considerable efforts to protect our information systems, no data
          security measures can guarantee 100% security. We encourage you to
          safeguard your passwords, ID numbers, or other special access features
          on our Sites.
        </p>
        <p>
          <strong>Contact Us</strong>
        </p>
        <p>
          If you have questions about the privacy aspects of our Sites or
          Services or would like to make a complaint, please contact us
          at&nbsp;hello@Anchor Fabrication.co.
        </p>
        <p>
          <strong>Changes to this Policy</strong>
        </p>
        <p>
          This Policy is current as of the “Updated as of” date set forth above.
          We may change this Policy from time to time, so please be sure to
          check back periodically. The modified Policy will be effective
          immediately upon posting. If we make any changes to this Policy that
          materially affect our practices with regard to the personal
          information we have previously collected from you, we will endeavor to
          provide you with notice in advance of such change through commercially
          reasonable efforts available to us.
        </p>
      </div>
    ),
  };

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "blog-single-page",
        }}
      />
      <SEO title={content.title} />
      <Hero
        title="Proven Quality, Innovative Excellence"
        image={heroImage}
        page="blog-single"
      />
      <div className="single-page">
        <div className="col-1"></div>
        <div className="container col-2">
          <div>
            <h1>{content.title}</h1>
            <h3>{content.updatedAt}</h3>
          </div>
          <div className="main-content">{content.content}</div>
        </div>
        <div className="col-3"></div>
      </div>
    </Layout>
  );
};

export default Page;
