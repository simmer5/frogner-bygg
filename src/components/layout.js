import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Date from './date'

import './layout.css'

const Layout = ({ children }) => {
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
						minHeight: `100vh`,
						background: `#010101`,
						display: `flex`,
						flexDirection: `column`,
					}}
				>
					<Header siteTitle={data.site.siteMetadata.title} />
					<div
						style={{
							//margin: `0 auto`,
							maxWidth: `100vw`,
							//padding: `0px 1.0875rem 1.45rem`,
						}}
					>
						{/* {children} */}
						<main>{children}</main>
						<footer
							style={{
								paddingTop: '.5rem',
								paddingBottom: '.5rem',

								position: 'fixed',
								bottom: 0,
								width: '100vw',
								textAlign: 'center',
							}}
						>
							<Date />
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
