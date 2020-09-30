import React from 'react'

import { ReactComponent as SVGUserX } from '../../../assets/user-x.svg'

export const Unfollow = ({ author }) => {
    return (
        <button>
            <SVGUserX className="h-4 w-4 mr-2 text-gray-700" />Unfollow @{author.handle}
        </button>
    )
}
