import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({
  data,
  deleteData,
  onIncrease,
  onRise,
  searchPanel,
}) => {
  const elements = data
    .filter((obj) => {
      return obj.name.toLowerCase().includes(searchPanel.toLowerCase())
    })
    .map((obj) => (
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
