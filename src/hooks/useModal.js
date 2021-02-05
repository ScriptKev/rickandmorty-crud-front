import { useState } from 'react'

const useModal = () => {
  const [stateModal, setModalState] = useState({ isOpen: false })

  const openModal = () => setModalState({ ...stateModal, isOpen: true })
  const closeModal = () => setModalState({ ...stateModal, isOpen: false })
  const isOpen = stateModal.isOpen

  return { openModal, closeModal, isOpen }
}

export default useModal
