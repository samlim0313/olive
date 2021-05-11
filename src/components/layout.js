/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Toolbar, Paper, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './header';
import Footer from './footer';


const innerTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      paper: '#FFFFF0'
    }
  }
});

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Toolbar />
      <ThemeProvider theme={innerTheme}>
        <Paper square style={{minHeight: '50vh'}}>
          <Container maxWidth='md'>
            {children}
          </Container>
        </Paper>
      </ThemeProvider>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
