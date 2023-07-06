import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { passangerListRequest } from './Action/Action'
import DataTable from './Table'
import { useEffect } from 'react'


function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.passangerDataReducer.isLoading)
  const passangerData = useSelector((state) => state.passangerDataReducer)
  const isError = useSelector((state) => state.passangerDataReducer.error)
  const isDeleted = useSelector((state) => state.passangerDataReducer.isDeleted)
  const isDeleteError = useSelector(
    (state) => state.passangerDataReducer.isDeleteError
  )
  const isUpdated = useSelector((state) => state.passangerDataReducer.isUpdated)
  const isUpdateError = useSelector(
    (state) => state.passangerDataReducer.isUpdateError
  )

  useEffect(() => {
    dispatch(passangerListRequest())
  }, [dispatch])

  if (isError) {
    return <h1>isError</h1>
  }

  return (
    <>
      {isLoading ? (
        <h1>isLoading...</h1>
      ) : (
        <div className="App">
          {isDeleted ? <p>DELETED</p> : null}
          {isDeleteError ? <p>NOT DELETED</p> : null}
          {isUpdated ? <p>UPDATED</p> : null}
          {isUpdateError ? <p>ERROR</p> : null}
          <DataTable passangerData={passangerData} />
        </div>
      )}
    </>
  )
}

export default App
