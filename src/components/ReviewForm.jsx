import { useState, } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";



const ReviewForm = ({ movie_id, fetchData }) => {

  const api_url = `${import.meta.env.VITE_API_URL}/${movie_id}/reviews`;
  const redirect = useNavigate();

  const initialFormData = {
    text: '',
    name: '',
    vote: ''
  }

  const [formData, setFormData] = useState(initialFormData)




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    console.log(api_url)


    axios.post(api_url, formData, { headers: { 'content-Type': 'application/json' } })
      .then(res => {
        console.log(res.data);
        setFormData(initialFormData)
        fetchData(movie_id, () => redirect('/404'))
      })

      .catch(err => {
        console.log(err)
      }
      )
  }

  const setFieldValue = (e) => {
    const { value, name } = e.target;
    setFormData((prev => ({
      ...prev,
      [name]: value
    })))
  }

  return (
    <div className=" card">
      <div className="card-header">
        <h3>Aggiungi una recensione</h3>
      </div>

      <div className="card-body">
        <form action="#" onSubmit={handleSubmit}>
          <div className="row row-cols-2 mb-2">
            <div className="form-group">
              <label className="my-2 fw-bold">Nome</label>
              <input
                name="name"
                placeholder="Inserisci il nome"
                type="text"
                value={formData.name}
                onChange={setFieldValue}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="my-2 fw-bold">Voto</label>
              <input
                name="vote"
                placeholder="Inserisci il voto"
                type="number"
                min={1}
                max={5}
                value={formData.vote}
                onChange={setFieldValue}
                className="form-control"
              />
            </div>
          </div>


          <div className="form-group">
            <label className="my-2 fw-bold">Testo</label>
            <textarea
              name="text"
              placeholder="Inserisci la recensione"
              type="text"
              value={formData.text}
              onChange={setFieldValue}
              className="form-control"
            ></textarea>
          </div>

          <div className="d-flex justify-content-center my-3">
            <button className="btn btn-outline-success px-5" type="submit">Invia</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ReviewForm