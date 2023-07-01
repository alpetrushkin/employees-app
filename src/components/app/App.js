import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import './app.css'

function App() {
  const data = [
    { name: 'Bob O.', salary: 6700, selected: false },
    { name: 'Alex P.', salary: 3500, selected: false },
    { name: 'Smith S.', salary: 1000, selected: true },
  ]

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  )
}

export default App
