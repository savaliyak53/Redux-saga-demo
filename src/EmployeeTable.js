import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { passangerListDeleteRequest } from './Action/Action'
import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Edit from './Edit'

function EmployeeTable({ list }) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const formHandler = () => {
    setShow(!show)
  }

  return (
    <>
      <td>{list.name}</td>
      <td>{list.trips}</td>
      <td>
        {
          <Table striped bordered hover>
            <tbody>
              {list &&
                list.airline?.map((airLineData, key) => (
                  <tr key={key}>
                    {show ? (
                      <Edit _id={list._id} airLineId={airLineData._id} />
                    ) : null}
                    <td> {airLineData.country}</td>
                    <td> {airLineData.name}</td>
                    <td> {airLineData.head_quaters}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        }
      </td>
      <td>
        <i className="icon" onClick={formHandler}>
          <FiEdit />
        </i>
        <i
          className="icon"
          onClick={() => dispatch(passangerListDeleteRequest(list._id))}
        >
          <FiTrash2 />
        </i>
      </td>
    </>
  )
}

export default EmployeeTable
