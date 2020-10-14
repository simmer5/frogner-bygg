import React from 'react'

const date = () => {
	const d = new Date()
	return (
		<div
			style={{
				color: '#f00',
				fontSize: '1.5rem',
				fontWeight: '600',
			}}
		>
			{d.getFullYear()} © Frogner bygg service AS
		</div>
	)
}

export default date
