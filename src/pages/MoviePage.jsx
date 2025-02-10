import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const MoviePage = () => {
  const { id } = useParams();
  const { movie, fetchMovie } = useGlobalContext();

  useEffect(() => fetchMovie(id), [])

  return (
    <div>MoviePage recensioni del film {id}</div>
  )
}

export default MoviePage