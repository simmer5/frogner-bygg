import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Logo from '../images/logoIcon1.png'

const LogoIcon = () => {
	const matches = useMediaQuery('(min-width:600px)')

	const size = '${matces ? 3% : 8%}'

	return (
		<img
			src={Logo}
			alt='Frogner bygg service'
			style={{ width: `${size}`, marginBottom: 0, marginRight: '10px' }}
		/>
	)
}

export default LogoIcon
