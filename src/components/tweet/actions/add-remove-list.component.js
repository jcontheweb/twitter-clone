import React from 'react'

import { ReactComponent as SVGList } from '../../../assets/list.svg'

export const AddRemoveLists = () => {
    return (
        <button>
            <SVGList className="h-4 w-4 mr-2 text-gray-700" />Add/remove from Lists
        </button>
    )
}
