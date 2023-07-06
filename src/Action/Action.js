import {
  PASSANGER_LIST_REQUSTED,
  PASSANGER_LIST_DELETE_REQUEST,
  PASSANGER_LIST_UPDATE_REQUEST,
} from '../Constant'

export const passangerListRequest = () => {
  return {
    type: PASSANGER_LIST_REQUSTED,
  }
}

export const passangerListDeleteRequest = (_id) => {
  return {
    type: PASSANGER_LIST_DELETE_REQUEST,
    _id: _id,
  }
}
export const passangerListUpdateRequest = (updatePassangerDetail) => {
  return {
    type: PASSANGER_LIST_UPDATE_REQUEST,
    updatedPassangerDetail: updatePassangerDetail,
  }
}
