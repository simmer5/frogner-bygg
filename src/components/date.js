import React from 'react'

const date = () => {
    const d = new Date()
     return (
        <div syles={{color: '#f00', position: 'sticy', bottom:0 }}>
            {d.getUTCDate()}.{d.getMonth()+1}.{d.getFullYear()}
        </div>
    )
}

export default date
