import ListCard from 'components/ListCard'
import Loader from 'components/Loader'
import { useEffect, useState } from 'react'
import { getLocations } from 'services/api'

export default function Locations() {
  const [locations, setLocations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    getLocations()
      .then(locations => {
        setLocations(locations)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <Loader />

  return (
    <>
      <h2>Locations</h2>
      {
        locations.map(location => <ListCard title={location.name} />)
      }
    </>
  )
}
