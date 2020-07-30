import React, { useState } from 'react'

import { OptionsModal } from '../options-modal/options-modal.component'

import { AddRemoveLists } from './actions/add-remove-list.component'
import { Block } from './actions/block.component'
import { EmbedTweet } from './actions/embed-tweet.component'
import { Mute } from './actions/mute.component'
import { NotInterested } from './actions/not-interested.component'
import { ReportTweet } from './actions/report-tweet.component'
import { Unfollow } from './actions/unfollow.component'

export const TweetOptions = ({ tweet }) => {
    return (
        <>
            <OptionsModal>
                <NotInterested id={tweet.id} />
                <Unfollow author={tweet.author} />
                <AddRemoveLists id={tweet.id} />
                <Mute author={tweet.author} />
                <Block author={tweet.author} />
                <EmbedTweet id={tweet.id} />
                <ReportTweet id={tweet.id} />
            </OptionsModal>
        </>
    )
}
