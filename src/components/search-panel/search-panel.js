import './search-panel.css'

const SearchPanel = ({ setSearchPanel }) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      onChange={(event) => setSearchPanel(event.currentTarget.value)}
    />
  )
}

export default SearchPanel
