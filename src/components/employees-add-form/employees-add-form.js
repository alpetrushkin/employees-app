import './employees-add-form.css'
import { useState } from 'react'

const EmployeesAddForm = ({ callback }) => {
  const [name, setName] = useState('')
  const [salary, setSalary] = useState('')

  const onChangeName = (event) => {
    setName(event.currentTarget.value)
  }

  const onChangeSalary = (event) => {
    setSalary(event.currentTarget.value)
  }

  const addNewEmployees = (event) => {
    event.preventDefault()
    callback(name, salary)
    setName('')
    setSalary('')
  }

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form onSubmit={addNewEmployees} className="add-form d-flex">
        <input
          value={name}
          name="name"
          type="text"
          onChange={onChangeName}
          className="form-control new-post-label"
          placeholder="Как его зовут?"
        />
        <input
          value={salary}
          name="salary"
          type="number"
          onChange={onChangeSalary}
          className="form-control new-post-label"
          placeholder="З/П в $?"
        />

        <button onClick={addNewEmployees} className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  )
}

export default EmployeesAddForm
