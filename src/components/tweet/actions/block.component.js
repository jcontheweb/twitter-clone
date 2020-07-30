import React from 'react'

import { ReactComponent as SVGDelete } from '../../../assets/delete.svg'

export const Block = ({ author }) => {
    return (
        <button className="flex items-center leading-tight mb-5 focus:outline-none focus:shadow-outline">
            <SVGDelete className="h-4 w-4 mr-2 text-gray-700" />Block @{author.handle}
        </button>
    )
}
