import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CallIcon from '@material-ui/icons/Call'
import MailIcon from '@material-ui/icons/Mail'
import LocationOnIcon from '@material-ui/icons/LocationOn'

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
		margin: '1rem',
		padding: '1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: '#f00',
		fontSize: '2.5rem',
		fontWeight: '700',
		marginTop: '2rem',
	},
	'@media only screen and (max-width: 480px)': {
		title: {
			color: '#f00',
			fontSize: '1.5rem',
			fontWeight: '700',
		},
	},
})

const ContactBlock = () => {
	const classes = useStyles()

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
					<Card raised className={classes.frame}>
						<CallIcon />
						<Box className={classes.iText}> +47 400 00000</Box>
					</Card>
					<Card raised className={classes.frame}>
						<MailIcon />
						<Box className={classes.iText}> frognerbygg@frognerbygg.no</Box>
					</Card>
					<Card raised className={classes.frame}>
						<LocationOnIcon />
						<Box className={classes.iText}>Sundbyveien 111A, 3477 BÅTSTØ</Box>
					</Card>
				</Box>
			</Paper>
		</>
	)
}

export default ContactBlock
