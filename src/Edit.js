import { useState } from 'react'
import './Edit.css'
import { ImCross } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { passangerListUpdateRequest } from './Action/Action'

function Edit(_id) {
  const [visible, setVisible] = useState(true)
  const [name, setName] = useState()
  const [trips, settrips] = useState()
  const [AirName, setAirName] = useState()
  const [airLineCountry, setAirLineCountrys] = useState()
  const [airLineHeadQuater, setAirLineHeadQuater] = useState()
  const dispatch = useDispatch()

  // bring from object)
  const airLineId = _id.airLineId
  const id = _id._id

  const updatePassangerDetail = {
    id,
    name,
    trips,
    airLineId,
    AirName,
    airLineCountry,
    airLineHeadQuater,
  }

  const handleShow = () => {
    setVisible(!visible)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setVisible(false)
    dispatch(passangerListUpdateRequest(updatePassangerDetail))
  }

  return (
    <>
      <div className={visible ? 'edit' : 'edit-hidden'}>
        <form onSubmit={handleSubmit}>
          <div>
            <h2 className="heading">Edit</h2>
            <button className="icon1" onClick={handleShow}>
              <ImCross />
            </button>
          </div>
          <input
            type="text"
            className="input"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          ></input>
          <input
            type="text"
            className="input"
            onChange={(e) => settrips(e.target.value)}
            placeholder="trips"
          ></input>
          <input
            type="text"
            className="input"
            onChange={(e) => setAirName(e.target.value)}
            placeholder="Airline's name"
          ></input>
          <input
            type="text"
            className="input"
            onChange={(e) => setAirLineCountrys(e.target.value)}
            placeholder="Airline's Country"
          ></input>
          <input
            type="text"
            className="input"
            onChange={(e) => setAirLineHeadQuater(e.target.value)}
            placeholder="Airline's head-quater"
          ></input>
          <div className="submit">
            <button type="submit" className="update">
              <h2>Update</h2>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Edit
