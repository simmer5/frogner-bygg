import React from 'react'
import PropTypes from 'prop-types'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Face from '../images/face.png'

import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import './layout.css'

const useStyles = makeStyles(theme => ({
  bgImageMo: {
    position: 'fixed',
    bottom: 0,
    right: '-40px',
    width: '100%',
    marginBottom: 0,
  },
  bgImageDe: {
    position: 'fixed',
    bottom: 0,
    right: '-40px',
    width: '60%',
    marginBottom: 0,
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:600px)')
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div
          style={{
            minHeight: '100vh',
            background: '#010101',
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 100,
            }}
          >
            <main>
              <CardMedia
                className={!matches ? classes.bgImageMo : classes.bgImageDe}
                component="img"
                image={Face}
              />
              {children}
            </main>
            <footer style={{ paddingTop: 10, color: '#f00' }}>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
