import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBenches } from "../../store/benches";
import BenchList from "./BenchList";

const BenchIndexPage = () => {
  const benches = useSelector((state) => Object.values(state.benches))
  // console.log("benches", benches);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBenches());
  }, [dispatch])

  return (
    <div>
      {/* BenchIndexPage */}
      <BenchList benches={benches} />
    </div>
  )
}

export default BenchIndexPage;