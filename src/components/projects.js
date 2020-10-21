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
		width: '55vw',
		margin: '1rem',
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

const Projects = () => {
	const classes = useStyles()
	const matches = useMediaQuery('(min-width:600px)')

	const height = `${matches ? 350 : 140}`

	return (
		<>
			<Typography
				gutterBottom
				variant='h4'
				component='h1'
				className={classes.title}
			>
				Spennende prosjekter
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
						height={height}
						image={PhotoMP}
						title='Marius Puzaras'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							Trondheim
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							Fasade arbeid
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
						height={height}
						image={PhotoMP}
						title='Contemplative Reptile'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							Oslo
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							Tak
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
						height={height}
						image={PhotoMP}
						title='Contemplative Reptile'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							Jessheim
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							Utearbeid
						</Typography>
					</CardContent>
				</Card>
			</Paper>
		</>
	)
}

export default Projects
