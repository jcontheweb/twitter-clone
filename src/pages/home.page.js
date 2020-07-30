import React, { useContext } from 'react'

import { Timeline } from '../components/timeline/timeline.component'

import { Loader } from '../components/loader/loader.component'
import { SidebarTrigger } from '../components/account-sidebar/trigger.component'
import { WelcomeBack } from '../components/welcome-back/welcome-back.component'
import { Tweet } from '../components/tweet/tweet.component'

export const Home = () => {

    const tweet = {
        id: 10,
        created_at: '8h',
        author: {
            id: 1,
            name: 'Justin Cairns',
            handle: 'justincairns',
            avatar: null,
            verified: true,
        },
        content: `
            It would be impossible for me to be more excited about this fight. The return of the GOAT lightweight king, @TeamKhabib vs his most dangerous challenger, @justin_gaethje.
            I CAN'T FUCKING WAIT.
        `,
        stats: {
            comments: 139,
            retweets: 266,
            likes: 3700
        }
    }

    return (
        <>
            <div className="border-b p-3 sticky top-0 bg-white flex items-center z-10">
                <SidebarTrigger />
                <p className="font-bold text-lg">Home</p>
            </div>
            <Timeline />
            {/* <div className="flex-1 flex items-center justify-center">
                <Loader></Loader>
            </div> */}

            {/* <div className="flex-1 pb-12">
                <WelcomeBack />
                <Tweet tweet={tweet} />
                <Tweet tweet={tweet} />
                <Tweet tweet={tweet} />
                <Tweet tweet={tweet} />
                <Tweet tweet={tweet} />
                <Tweet tweet={tweet} />
            </div> */}
        </>
    )
}
