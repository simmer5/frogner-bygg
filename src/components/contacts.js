import React, { useState } from 'react'
import CallIcon from '@material-ui/icons/Call'
import MailIcon from '@material-ui/icons/Mail'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'

const useStyles = makeStyles(
	{
		//root: { top: '210px' },
		paper: {
			border: '1px solid #f00',
			backgroundColor: 'rgb(1, 1, 1)',
		},

		iContainerShort: {
			zIndex: 1,
		},
		iFrame: {
			background: 'none',
			color: 'whitesmoke',
			border: '1px solid white',
			margin: '2.5rem 0.5rem',
			padding: '1.5rem 0.2rem',
			display: 'flex',
		},
		'@media only screen and (max-width: 480px)': {
			iFrame: {
				margin: '.5rem 0.5rem',
			},
		},
		popTitle: {
			padding: '1rem',
			color: 'whitesmoke',
		},
	},
	{ name: 'MuiPopover' }
)
const ContactIcons = ({
	long,
	short,
	anchorVertical,
	anchorHorizontal,
	transformVertical,
	transformHorizontal,
}) => {
	const classes = useStyles()

	const [value, setValue] = useState('')
	const [anchorEl, setAnchorEl] = useState(null)

	const handleOpen = e => {
		setAnchorEl(e.currentTarget)
		setValue(e.currentTarget.value)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const open = Boolean(anchorEl)

	return (
		<>
			{/* ========== Short version========== */}
			{short && (
				<>
					<Box className={classes.iContainerShort}>
						<Box
							component='button'
							value='+47 400 00000'
							className={classes.iFrame}
							onClick={handleOpen}
						>
							<CallIcon />
						</Box>
						<Box
							component='button'
							className={classes.iFrame}
							onClick={handleOpen}
							value='frognerbyg@frognerbyg.no'
						>
							<MailIcon />
						</Box>
						<Box
							component='button'
							className={classes.iFrame}
							onClick={handleOpen}
							value='Sundbyveien 111A, 3477 BÅTSTØ'
						>
							<LocationOnIcon />
						</Box>

						<Popover
							disablePortal={true}
							open={open}
							anchorEl={anchorEl}
							onClose={handleClose}
							anchorOrigin={{
								vertical: `${anchorVertical}`,
								horizontal: `${anchorHorizontal}`,
							}}
							transformOrigin={{
								vertical: `${transformVertical}`,
								horizontal: `${transformHorizontal}`,
							}}
						>
							<div className={classes.popTitle}>{value}</div>
						</Popover>
					</Box>
				</>
			)}
		</>
	)
}

export default ContactIcons
