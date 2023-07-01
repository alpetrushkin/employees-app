import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({ data }) => {
  const elements = data.map((obj, index) => (
    <EmployeesListItem key={index} {...obj} />
  ))

  return <ul className="app-list list-group">{elements}</ul>
}

export default EmployeesList
