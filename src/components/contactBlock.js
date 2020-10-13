import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CallIcon from '@material-ui/icons/Call'
import MailIcon from '@material-ui/icons/Mail'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Popover from '@material-ui/core/Popover'

import PhotoMP from '../images/face.png'

const useStyles = makeStyles({
	teamCardMb: {
		width: '65vw',
		margin: '1rem',
	},
	teamCardDe: {
		width: '15vw',
		margin: '1rem',
	},
	container: {
		display: 'flex',
		msFlexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	frame: {
		background: 'none',
		// color: '#00a6ff',
		border: '4px solid #f00',
		margin: '1rem',
		padding: '1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		// width: "15vw",
		transition: 'all 300ms ease 0s',
	},
	title: {
		color: '#f00',
		fontSize: '2.5rem',
		fontWeight: '700',
		marginTop: '2rem',
	},
})

const ContactBlock = () => {
	const classes = useStyles()
	const matches = useMediaQuery('(min-width:600px)')

	return (
		<>
			<Typography
				gutterBottom
				variant='h4'
				component='h1'
				className={classes.title}
			>
				Kontakt oss
			</Typography>
			<Paper
				variant='outlined'
				elevation={5}
				square
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					flexWrap: 'wrap',
					marginBottom: '2rem',
				}}
			>
				<Box className={classes.container}>
					<Box className={classes.frame}>
						<CallIcon />
						<Box className={classes.iText}> +47 400 00000</Box>
					</Box>
					<Box className={classes.frame}>
						<MailIcon />
						<Box className={classes.iText}> frognerbygg@frognerbygg.no</Box>
					</Box>
					<Box className={classes.frame}>
						<LocationOnIcon />
						<Box className={classes.iText}>Sundbyveien 111A, 3477 BÅTSTØ</Box>
					</Box>
				</Box>
			</Paper>
		</>
	)
}

export default ContactBlock
