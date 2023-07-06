import {
  PASSANGER_LIST_REQUSTED,
  PASSANGER_LIST_SUCCESS,
  PASSANGER_LIST_ERROR,
  PASSANGER_LIST_DELETE_SUCCESS,
  PASSANGER_LIST_DELETE_ERROR,
  PASSANGER_LIST_UPDATE_SUCCESS,
  PASSANGER_LIST_UPDATE_ERROR,
} from '../Constant'

const initialState = {
  passangerList: [],
  totalPages: 0,
  totalPassengers: 0,
  isLoading: false,
  error: false,
  isDeleted: false,
  isDeleteError: false,
  isUpdated: false,
  isUpdateError: false,
}

export const passangerDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASSANGER_LIST_REQUSTED:
      return {
        ...state,
        isLoading: true,
      }

    case PASSANGER_LIST_SUCCESS:
      return {
        ...state,
        passangerList: action.data.data,
        totalPages: action.data.totalPages,
        totalPassengers: action.data.totalPassengers,
        isLoading: false,
        isDeleteError: false,
        isDeleted: false,
        isUpdated: false,
        isUpdateError: false,
      }

    case PASSANGER_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      }

    case PASSANGER_LIST_DELETE_SUCCESS:
      return {
        ...state,
        isDeleted: true,
      }

    case PASSANGER_LIST_DELETE_ERROR:
      return {
        ...state,
        isDeleteError: true,
      }

    case PASSANGER_LIST_UPDATE_SUCCESS:
      return {
        ...state,
        isUpdated: true,
      }
    case PASSANGER_LIST_UPDATE_ERROR:
      return {
        ...state,
        isUpdateError: true,
      }
    default:
      return { ...state }
  }
}
