import React from 'react'
import { Link } from 'react-router-dom'

import { TweetOptions } from './tweet-options.component'
import { TweetAvatar } from './tweet-avatar.component'
import { TweetCreated } from './tweet-created.component'
import { TweetContent } from './tweet-content.component'
import { TweetStats } from './tweet-stats.component'

export const Tweet = ({ tweet }) => {
    return (
        <div className="block p-3 pb-2 bg-white relative border-b text-sm hover:bg-gray-100 transition duration-200">
            <TweetOptions tweet={tweet} />
            <div className="flex">
                <TweetAvatar author={tweet.author} />
                <div className="ml-3 flex-1">
                    <TweetCreated tweet={tweet} />
                    <TweetContent content={tweet.content} />
                    <div className="mt-3">
                        <TweetStats tweet={tweet} />
                    </div>
                </div>
            </div>
        </div>
    )
}
