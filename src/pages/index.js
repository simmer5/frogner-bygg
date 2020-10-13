import React from 'react'

import Layout from '../components/layout'
import Contacts from '../components/contacts'

import SEO from '../components/seo'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Box from '@material-ui/core/Box'
import Face from '../images/face.png'

const useStyles = makeStyles(theme => ({
	container: {
		height: '100vh',
	},
	text: {
		position: 'absolute',
		color: '#f00',
		padding: '1rem',
		left: 0,
		zIndex: 1,
		width: '90vw',
		fontSize: '2.5rem',
		fontWeight: '900',
		lineHeight: 'normal',
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
				<Typography component='h1' className={classes.text}>
					<span style={{ color: 'whitesmoke' }}>Vi er</span> <br />
					Frogner Bygg <br /> Service
				</Typography>

				<Box style={{ position: 'absolute', zIndex: 1 }}>
					<Contacts
						short
						anchorVertical='center'
						anchorHorizontal='left'
						transformVertical='center'
						transformHorizontal='right'
					/>
				</Box>

				<CardMedia
					className={!matches ? classes.bgImageMo : classes.bgImageDe}
					component='img'
					image={Face}
				/>
			</div>
		</Layout>
	)
}

export default IndexPage
