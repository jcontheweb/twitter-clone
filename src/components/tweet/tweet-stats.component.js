import React, { useState } from 'react'

import { OptionsModal } from '../options-modal/options-modal.component'

import { ReactComponent as SVGRetweet } from '../../assets/repeat.svg'
import { ReactComponent as SVGShare } from '../../assets/share-2.svg'
import { ReactComponent as SVGMessage } from '../../assets/message-circle.svg'
import { ReactComponent as SVGHeart } from '../../assets/heart.svg'

const StatsRetweet = ({ tweet }) => {
    const [expanded, setExpanded] = useState(false)
    const handleClick = () => {
        setExpanded(prevState => !prevState)
    }
    return (
        <div>
            {expanded && (<OptionsModal onClick={handleClick}>
                <button className="flex items-center leading-tight mb-5 focus:outline-none focus:shadow-outline">Retweet</button>
                <button className="flex items-center leading-tight focus:outline-none focus:shadow-outline">Retweet with comment</button>
            </OptionsModal>)}
            <button className="text-gray-700 flex items-center text-sm" onClick={handleClick}><SVGRetweet className="w-4 mr-2" />{tweet.stats.retweets}</button>
        </div>
    )
}

const StatsComment = ({ tweet }) => (<div className="text-gray-700 flex items-center text-sm"><SVGMessage className="w-4 mr-2" />{tweet.stats.comments}</div>)
const StatsLike = ({ tweet }) => (<div className="text-gray-700 flex items-center text-sm"><SVGHeart className="w-4 mr-2" />{tweet.stats.likes}</div>)
const ShareTweet = () => {
    const [expanded, setExpanded] = useState(false)
    const handleClick = () => {
        setExpanded(prevState => !prevState)
    }
    return (
        <div>
            {expanded && (<OptionsModal onClick={handleClick}>
                <button className="flex items-center leading-tight mb-5 focus:outline-none focus:shadow-outline">
                    Send via Direct Message
                </button>
                <button className="flex items-center leading-tight mb-5 focus:outline-none focus:shadow-outline">
                    Add Tweet to Bookmarks
                </button>
                <button className="flex items-center leading-tight mb-5 focus:outline-none focus:shadow-outline">
                    Copy link to Tweet
                </button>
                <button className="flex items-center leading-tight focus:outline-none focus:shadow-outline">
                    Share Tweet via ...
                </button>
            </OptionsModal>)}
            <button className="text-gray-700 flex items-center" onClick={handleClick}><SVGShare className="w-4 text-gray-700" /></button>
        </div>
    )
}

export const TweetStats = ({ tweet }) => {
    return (
        <div className="flex justify-between items-center">
            <StatsComment tweet={tweet} />
            <StatsRetweet tweet={tweet} />
            <StatsLike tweet={tweet} />
            <ShareTweet />
        </div>
    )
}
