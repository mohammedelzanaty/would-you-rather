import { REMOVE_AUTHED_USER, SET_AUTHED_USER } from '../types'

export default function authedUserReducer(authedUser = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      const { userId } = action.payload
      return userId
    case REMOVE_AUTHED_USER:
      return null
    default:
      return authedUser
  }
}
