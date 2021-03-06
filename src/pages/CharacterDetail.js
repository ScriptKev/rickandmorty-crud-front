/* eslint-disable */

import { useEffect, useState } from 'react'
import { useRoute } from 'wouter'
import Loader from 'components/Loader'
import { useCharacter } from 'hooks/useCharacter'

export default function CharacterDetail() {
  const [, params] = useRoute('/personaje/:id')
  const [isLoading, setIsLoading] = useState(true)
  const { getCharacter } = useCharacter()

  useEffect(() => {
    window.scrollTo(0, 0)
    getCharacter(params.id)
    setIsLoading(false)
  }, [])

  if (isLoading) return <Loader />

  return (
    <div style={{ padding: '0 10px' }}>
      {params?.id}
    </div>
  )
}