import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

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
	title: {
		color: '#f00',
		fontSize: '2.5rem',
		fontWeight: '700',
	},
	'@media only screen and (max-width: 480px)': {
		title: {
			color: '#f00',
			fontSize: '1.5rem',
			fontWeight: '700',
		},
	},
})

const Team = () => {
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
				Team
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
				}}
			>
				<Card
					raised
					className={!matches ? classes.teamCardMb : classes.teamCardDe}
				>
					<CardMedia
						component='img'
						alt='Contemplative Reptile'
						height='140'
						image={PhotoMP}
						title='Marius Puzaras'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							Marius
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							Daglig leder
						</Typography>
					</CardContent>
				</Card>
				<Card
					raised
					className={!matches ? classes.teamCardMb : classes.teamCardDe}
				>
					<CardMedia
						component='img'
						alt='Contemplative Reptile'
						height='140'
						image={PhotoMP}
						title='Contemplative Reptile'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							Edita
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							Daglig leder
						</Typography>
					</CardContent>
				</Card>
				<Card
					raised
					className={!matches ? classes.teamCardMb : classes.teamCardDe}
				>
					<CardMedia
						component='img'
						alt='Contemplative Reptile'
						height='140'
						image={PhotoMP}
						title='Contemplative Reptile'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							Saulene
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							Daglig leder
						</Typography>
					</CardContent>
				</Card>
			</Paper>
		</>
	)
}

export default Team
