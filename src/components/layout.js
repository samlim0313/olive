/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Toolbar, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './header';
import Footer from './footer';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Toolbar />
      <Container maxWidth='md' style={{minHeight: '100vh'}}>
        {children}
      </Container>
      <ThemeProvider theme={darkTheme}>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
