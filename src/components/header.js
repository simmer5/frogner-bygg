import PropTypes from 'prop-types'
import React, { useState } from 'react'

import Team from '../components/team'
import Projects from '../components/projects'
import ContactBlock from '../components/contactBlock'
import LogoIcon from '../components/LogoIcon'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const drawerWidth = '90vw'

const useStyles = makeStyles(theme => ({
	headerRoot: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		background: '#010101',
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		background: `rgba(15 15 15)`,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	text: {
		color: '#f5f5f5',
		fontSize: '1.5rem',
		fontWeight: '700',
	},
	'@media only screen and (max-width: 480px)': {
		text: {
			color: '#f5f5f5',
			fontSize: '1rem',
			fontWeight: '700',
		},
	},
}))

const Header = ({ siteTitle }) => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	function handleDrawerOpen() {
		setOpen(true)
	}

	function handleDrawerClose() {
		setOpen(false)
	}

	return (
		<div className={classes.headerRoot}>
			<CssBaseline />
			<AppBar
				position='fixed'
				elevation={0}
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='Open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<LogoIcon />
					<Typography variant='h6' color='inherit'>
						{siteTitle}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<Typography component='h1' className={classes.text}>
						Frogner Bygg Service
					</Typography>
					<IconButton color='secondary' onClick={handleDrawerClose}>
						<CloseIcon fontSize='large' />
					</IconButton>
				</div>

				<Divider />
				<Container style={{ display: 'flex', flexDirection: 'column' }}>
					<Team />
					<Projects />
					<ContactBlock />
				</Container>
			</Drawer>
		</div>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
