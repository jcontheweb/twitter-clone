import React from 'react'
import { Link } from 'react-router-dom'

export const TweetAvatar = ({ author }) => {
    return (
        <Link className="rounded-full h-10 w-10 overflow-hidden relative" to={`/${author.handle}`}>
            {author.avatar ? (
                <img src={author.avatar} alt=""/>
            ) : (
                <span className="absolute inset-0 bg-gray-300"></span>
            )}
        </Link>
    )
}
