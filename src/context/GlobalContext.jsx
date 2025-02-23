import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const api_url = import.meta.env.VITE_API_URL;
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null)

  const fetchMovies = () => {
    axios.get(api_url)
      .then(res => {
        console.log(res.data);
        setMovies(res.data)
      })
      .catch(err => console.log(err))
  }

  const fetchMovie = (id, redirect) => {
    axios.get(`${api_url}/${id}`)
      .then(res => {
        setMovie(res.data)
      })
      .catch(err => {
        console.log(err)
        if (err.status === 404) redirect()
      })
  }

  const value = {
    fetchMovies,
    movies,
    fetchMovie,
    movie
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}


const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export {
  GlobalProvider,
  useGlobalContext
}