import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({ data, deleteData, onIncrease, onRise }) => {
  const elements = data.map((obj) => (
    <EmployeesListItem
      key={obj.id}
      {...obj}
      onDelete={() => deleteData(obj.id)}
      onIncrease={(value) => onIncrease(obj.id, value)}
      onRise={(value) => onRise(obj.id, value)}
    />
  ))

  return <ul className="app-list list-group">{elements}</ul>
}

export default EmployeesList
