import './app-filter.css'

const AppFilter = ({ activeFilter, onClickActiveHandler }) => {
  const sorted = ['Все сотрудники', 'На повышении', 'З/П больше 1000$']

  return (
    <div className="btn-group">
      {sorted.map((sort) => (
        <button
          key={sort}
          onClick={() => onClickActiveHandler(sort)}
          className={
            activeFilter === sort ? 'btn btn-light' : 'btn btn-outline-light'
          }
          type="button"
        >
          {sort}
        </button>
      ))}
    </div>
  )
}

export default AppFilter
