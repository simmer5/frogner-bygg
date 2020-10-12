import React from 'react'

import Layout from '../components/layout'

import SEO from '../components/seo'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import Face from '../images/face.png'

const useStyles = makeStyles(theme => ({
	container: {
		height: '100vh',
	},
	text: {
		position: 'absolute',
		color: '#f00',
		padding: '20px',
		left: 0,
		zIndex: 1,
	},
	centerAligned: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	fotoContainer: {
		background: 'red',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	bgImageMo: {
		marginBottom: 0,
		width: '100%',
		position: 'absolute',
		bottom: 0,
		left: '15vw',
	},
	bgImageDe: {
		marginBottom: 0,
		width: '60%',
		alignSelf: 'flex-end',
	},
}))

const IndexPage = () => {
	const classes = useStyles()
	const matches = useMediaQuery('(min-width:600px)')

	return (
		<Layout>
			<SEO title='Home' />
			<div className={`${classes.container} ${classes.centerAligned}`}>
				<h1 className={classes.text}>Frogner Bygg Service</h1>

				{/* <div className={classes.fotoContainer}> */}
				<CardMedia
					className={!matches ? classes.bgImageMo : classes.bgImageDe}
					component='img'
					image={Face}
				/>
				{/* </div> */}
			</div>
		</Layout>
	)
}

export default IndexPage
