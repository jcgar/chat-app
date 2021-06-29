import { useDispatch, useSelector } from 'react-redux'
import { actions, get } from './store'

const { getConversation } = get
const { setConversation } = actions

const useApp = () => {
  const dispatch = useDispatch()
  const selectConversation = (id: number) => {
    dispatch(setConversation({ id }))
  }

  return {
    conversation: useSelector(getConversation),
    selectConversation
  }
}

export default useApp