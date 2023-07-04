import { useState } from 'react'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import { v4 as uuidv4 } from 'uuid'
import './app.css'

function App() {
  const [searchPanel, setSearchPanel] = useState('')

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
      rise: true,
      id: uuidv4(),
    },
    {
      name: 'Smith S.',
      salary: 800,
      increase: false,
      rise: true,
      id: uuidv4(),
    },
  ])
  const [activeFilter, setActiveFilter] = useState('Все сотрудники')
  let collapsed = data
  if (activeFilter === 'На повышении') {
    collapsed = data.filter((el) => el.rise)
  }
  if (activeFilter === 'З/П больше 1000$') {
    collapsed = data.filter((el) => el.salary > 1000)
  }

  const onClickActiveHandler = (sort) => {
    setActiveFilter(sort)
  }

  const newData = (name, salary) => {
    if (name.length > 3 && salary > 0) {
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
        <SearchPanel setSearchPanel={setSearchPanel} />
        <AppFilter
          activeFilter={activeFilter}
          onClickActiveHandler={onClickActiveHandler}
        />
      </div>
      <EmployeesList
        data={collapsed}
        searchPanel={searchPanel}
        deleteData={deleteData}
        onRise={onRise}
        onIncrease={onIncrease}
      />
      <EmployeesAddForm callback={newData} />
    </div>
  )
}

export default App
