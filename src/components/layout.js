/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../images/favicon.ico";
import Helmet from "react-helmet";

import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `);

  console.log(data);

  const {title, description, image} = data.site.siteMetadata;

  console.log(title, description, image);

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />  
        <meta property="og:image" content={image} />
      </Helmet>
      <div>
        <main>{children}</main>
        <footer>
          Copyright © {new Date().getFullYear()} 3A Solutions Informatika Kft.,
          All Rights Reserved
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
