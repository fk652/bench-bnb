import BenchListItem from "./BenchListItem";

const BenchList = ({benches}) => {
  return (
    <>
      <h1>Benches</h1>
      {
        benches.map((bench) => {
          return <BenchListItem bench={bench} key={bench.id}/>
        })
      }
    </>
  )
}

export default BenchList;