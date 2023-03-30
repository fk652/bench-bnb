import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchBench } from "../../store/benches";
import capycloset from "./IMG_5362.jpg";
import "./BenchShow.css";

const BenchShowPage = () => {
  const {benchId} = useParams();
  const bench = useSelector((state) => state.benches[benchId]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBench(benchId));
  }, [dispatch, benchId])

  if (!bench) return null;

  let imgSauce = "https://img.freepik.com/premium-photo/lonely-wooden-bench-path-autumn-park-change-seasons-autumn-time-concept_73661-1099.jpg";
  switch (bench.id) {
    case 1:
      imgSauce = "https://www.nps.gov/common/uploads/grid_builder/linc/crop16_9/30CAEF6E-BAB6-FDB8-33B6EAC9D3E19E8A.jpg?width=600&quality=90&mode=crop"
      break;
    case 2:
      imgSauce = "https://secure.gravatar.com/avatar/0b9682de5647f55e1446b05be50dd04a?secure=true&size=300"
      break;
    case 3:
      imgSauce = capycloset
      break;
    case 5:
      imgSauce = "https://thumbs.dreamstime.com/b/park-bench-empty-dirty-51491869.jpg"
      break;
    default:
      break;
  }

  return (
    <div className="bench-show-page">
      {/* Bench Show Page */}
      <div className="header">
        <h1>{bench.title}</h1>
        <Link to="/">All Benches</Link>
      </div>
      <img src={imgSauce} alt="capybara"/>
      <div className="details">
        <h2>Details</h2>
        <p>{bench.description}</p>
        <ul>
          <li>Seats: {bench.seating}</li>
          <li>Latitude: {bench.lat}</li>
          <li>Longitude: {bench.lng}</li>
        </ul>
      </div>
    </div>
  )
}

export default BenchShowPage;