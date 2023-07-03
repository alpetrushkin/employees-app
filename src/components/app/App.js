import { useState } from 'react'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import { v4 as uuidv4 } from 'uuid'
import './app.css'

function App() {
  const [data, setData] = useState([
    {
      name: 'Bob O.',
      salary: 6700,
      increase: false,
      rise: false,
      id: uuidv4(),
    },
    {
      name: 'Alex P.',
      salary: 3500,
      increase: false,
      rise: false,
      id: uuidv4(),
    },
    {
      name: 'Smith S.',
      salary: 1000,
      increase: false,
      rise: true,
      id: uuidv4(),
    },
  ])

  const newData = (name, salary) => {
    if (name && salary > 0) {
      let newEmployees = { name: name, salary: salary, id: uuidv4() }
      setData([...data, newEmployees])
    }
  }

  const deleteData = (id) => {
    setData(data.filter((el) => el.id !== id))
  }

  const onIncrease = (id, value) => {
    setData(data.map((el) => (el.id === id ? { ...el, increase: value } : el)))
  }

  const onRise = (id, value) => {
    setData(data.map((el) => (el.id === id ? { ...el, rise: value } : el)))
  }

  return (
    <div className="app">
      <AppInfo data={data} />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList
        data={data}
        deleteData={deleteData}
        onRise={onRise}
        onIncrease={onIncrease}
      />
      <EmployeesAddForm callback={newData} />
    </div>
  )
}

export default App
