import './app-info.css'

const AppInfo = ({ data }) => {
  const numbersOfEmployees = data.length

  const likeCount = data.filter((item) => item.increase).length

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании №</h1>
      <h2>Общее чило сотрудников: {numbersOfEmployees}</h2>
      <h2>Премию получат: {likeCount}</h2>
    </div>
  )
}

export default AppInfo
