import React from 'react'
import { Link } from 'react-router-dom'

export const TweetCreated = ({ tweet }) => {
    return (
        <div className="flex items-center">
            <Link to={`/${tweet.author.handle}`} className="font-semibold flex items-center focus:underline">{tweet.author.name} {tweet.author.verified && <span className="ml-1 block bg-blue-500 h-4 w-4 rounded-full"></span>}</Link>
            <Link to={`/${tweet.author.handle}`} className="text-gray-700 ml-2">@{tweet.author.handle}</Link>
            <p className="text-gray-700 ml-2">{tweet.created_at}</p>
        </div>
    )
}
