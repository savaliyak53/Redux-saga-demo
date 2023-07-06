import { takeEvery, put, call } from 'redux-saga/effects'
import {
  PASSANGER_LIST_REQUSTED,
  PASSANGER_LIST_SUCCESS,
  PASSANGER_LIST_ERROR,
  PASSANGER_LIST_DELETE_REQUEST,
  PASSANGER_LIST_DELETE_SUCCESS,
  PASSANGER_LIST_DELETE_ERROR,
  PASSANGER_LIST_UPDATE_REQUEST,
  PASSANGER_LIST_UPDATE_SUCCESS,
  PASSANGER_LIST_UPDATE_ERROR,
} from '../Constant'
import {
  getPassangerList,
  deletePassangerList,
  passangerListUpdate,
} from '../services/passanger'

function* passangerListRequested() {
  try {
    // // let passangerResponse = yield fetch(
    //   'https://api.instantwebtools.net/v1/passenger?page=0&size=10'
    // )
    // passangerResponse = yield passangerResponse.json()

    let passangerResponse = yield getPassangerList()

    yield put({ type: PASSANGER_LIST_SUCCESS, data: passangerResponse.data })
  } catch (error) {
    yield put({ type: PASSANGER_LIST_ERROR, error })
  }
}

function* passangerListDeleteRequest(action) {
  try {
    const passangerId = action._id
    // yield fetch(`https://api.instantwebtools.net/v1/passenger/${passangerId}`, {
    //   method: 'DELETE',
    // })

    yield deletePassangerList(passangerId)
    yield put({ type: PASSANGER_LIST_DELETE_SUCCESS })
    yield call(passangerListRequested)
  } catch (error) {
    yield put({ type: PASSANGER_LIST_DELETE_ERROR })
  }
}

function* passangerListUpdateRequest(updatedPassangerDetail) {
  try {
    const passangerDetail = updatedPassangerDetail.updatedPassangerDetail
    // yield fetch(
    //   `https://api.instantwebtools.net/v1/passenger/${passangerDetail.id}`,
    //   {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       name: passangerDetail.name,
    //     }),
    //   }
    // )
    yield passangerListUpdate(passangerDetail)
    yield put({ type: PASSANGER_LIST_UPDATE_SUCCESS })
    yield call(passangerListRequested)
  } catch (error) {
    yield put({ type: PASSANGER_LIST_UPDATE_ERROR })
  }
}

export function* exampleSaga() {
  yield takeEvery(PASSANGER_LIST_REQUSTED, passangerListRequested)
  yield takeEvery(PASSANGER_LIST_DELETE_REQUEST, passangerListDeleteRequest)
  yield takeEvery(PASSANGER_LIST_UPDATE_REQUEST, passangerListUpdateRequest)
}
