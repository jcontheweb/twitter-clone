import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Loader } from '../loader/loader.component'
import { WelcomeBack } from '../welcome-back/welcome-back.component'
import { Tweet } from '../tweet/tweet.component'

export const Timeline = () => {
    const [tweets, setTweets] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:5000/api/tweets')
            .then(res => {
                setTweets(res.data)
                setTimeout(() => {
                    setLoading(false)
                }, 1500);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    return (
        <div className={!loading ? 'bg-gray-200 pb-12' : undefined}>
            <WelcomeBack></WelcomeBack>
            {loading ? (<Loader />) : tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </div>
    )
}
