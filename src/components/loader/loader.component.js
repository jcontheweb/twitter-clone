import React from 'react'

import "./loader.styles.css"

export const Loader = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="loader"></div>
        </div>
    )
}
