import Table from 'react-bootstrap/Table'
import EmployeeTable from './EmployeeTable'


function DataTable({ passangerData }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th rowSpan={2}>ID</th>
          <th rowSpan={2}>Name</th>
          <th rowSpan={2}>Trips</th>
          <th>
            <tr>
              <th colSpan={3}>Airlines</th>
            </tr>
            <tr>
              <th colSpan={2}>Counter</th>
              <th colSpan={2}>Name</th>
              <th colSpan={2}>Head-quaters</th>
            </tr>
          </th>
          <th rowSpan={3}>Action</th>
        </tr>
      </thead>
      <tbody>
        {passangerData.passangerList.map((list, key) => (
          <tr key={key}>
            <td>{key + 1}</td>
            <EmployeeTable list={list} />
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default DataTable
