import Modal from 'components/Modal'
import useModal from 'hooks/useModal'
import { createContext } from 'react'

const initialValue = {
  openModal: () => { },
  closeModal: () => { },
  isOpen: false
}

export const ModalContext = createContext(initialValue)

export const ModalProvider = ({ children }) => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      { isOpen && <Modal closeModal={closeModal} />}
      { children}
    </ModalContext.Provider>
  )
}