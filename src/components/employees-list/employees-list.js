import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({ data }) => {
  const elements = data.map((obj) => (
    <EmployeesListItem key={obj.id} {...obj} />
  ))

  return <ul className="app-list list-group">{elements}</ul>
}

export default EmployeesList
