import BenchListItem from "./BenchListItem";

const BenchList = ({benches}) => {
  return (
    <div className="bench-list">
      <h1>Benches</h1>
      {
        benches.map((bench) => {
          return <BenchListItem bench={bench} key={bench.id}/>
        })
      }
    </div>
  )
}

export default BenchList;