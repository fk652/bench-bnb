import { useHistory } from "react-router-dom"

const BenchListItem = ({bench}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/benches/${bench.id}`)
  }

  return (
    <div className="bench-list-item" onClick={handleClick}>
      <h2>{bench.title}</h2>
      <p>${bench.price}</p>
    </div>
  )
}

export default BenchListItem