import './employees-list-item.css'
import classnames from 'classnames'

const EmployeesListItem = ({
  name,
  salary,
  increase,
  rise,
  onDelete,
  onIncrease,
  onRise,
}) => {
  const increaseClass = classnames(
    'list-group-item d-flex justify-content-between',
    { increase: increase, like: rise }
  )

  return (
    <li className={increaseClass}>
      <span onClick={() => onRise(!rise)} className="list-group-item-label">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + ' $'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={() => onIncrease(!increase)}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          onClick={() => onDelete()}
          type="button"
          className="btn-trash btn-sm "
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default EmployeesListItem
