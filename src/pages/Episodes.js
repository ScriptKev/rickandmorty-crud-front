import ListCard from 'components/ListCard'
import Loader from 'components/Loader'
import { useEffect, useState } from 'react'
import { getEpisodes } from 'services/api'

export default function Episodes() {
  const [episodes, setEpisodes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    getEpisodes()
      .then(episodes => {
        setEpisodes(episodes)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <Loader />

  return (
    <>
      <h2>Episodes</h2>
      {
        episodes.map(episode => <ListCard title={episode.name} />)
      }
    </>
  )
}
