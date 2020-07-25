import React, { useEffect } from 'react'
import axios from 'axios'

export const App = () => {
  const fetchStats = async (username) => {
    const response = await axios.post('http://localhost:5000/api/search', { username: 'mobofo' })
    console.log(response.data)
  }

  useEffect(() => {
    fetchStats()
  }, [])

  return (
    <div>
      
    </div>
  )
}
